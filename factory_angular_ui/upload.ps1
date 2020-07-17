$source = {"C:\Users\brand\OneDrive\Home\Dokumente\GitHub\factory\factory_angular_ui\dist\kaese"
$configurationFile = "C:\Users\brand\OneDrive\Home\Dokumente\GitHub\factory\factory_angular_ui\upload_config.txt"
$destination = Get-Content $configurationFile

$excludeFile = "index.html"

$webclient = New-Object -TypeName System.Net.WebClient

$files = Get-ChildItem $source | where { ! $_.PSIsContainer }

foreach ($file in $files)
{
    if ($file.Name -ne $excludeFile)
    {
        Write-Host "Uploading $file"
        $webclient.UploadFile("$destination/$file", $file.FullName)
    }
} 

$webclient.Dispose()