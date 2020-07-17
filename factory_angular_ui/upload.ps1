
#$example call: .\upload.ps1 -source C:\Users\source -destination ftp://user:passworda@domain.ch/html/website
param(
    [Parameter(Mandatory = $true)]
    [string] $source,
    [Parameter(Mandatory = $true)]
    [string] $destination,
    [string] $excludeFile = "index.html"
)

$webclient = New-Object -TypeName System.Net.WebClient

$files = Get-ChildItem $source | where { ! $_.PSIsContainer }

foreach ($file in $files)
{
    if ($file.Name -ne $excludeFile)
    {
        #Write-Host "Uploading $file"
        $webclient.UploadFile("$destination/$file", $file.FullName)
    }
} 

$webclient.Dispose()