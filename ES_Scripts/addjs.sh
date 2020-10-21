#dos2unix -k $1
VistaarMaintain -addorupdate -vistaarJSLibs -dirpath=. -filenames=$1
VistaarMonitor -refresh -workflowentity -vistaarJSLibs -filenames=$1


