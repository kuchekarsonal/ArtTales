VistaarDeploy -entity -createorupdate -file=$1 -verbose
VistaarMonitor -refresh -workflowentity -libmetadatamapping; VistaarMonitor -refresh -workflowentity -securitylibrary
