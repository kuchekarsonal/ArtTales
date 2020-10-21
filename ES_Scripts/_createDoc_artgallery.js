var Art_Gallery_createDoc = function()
{
	/*
		'createDoc' API would create a record in the given entity based on the document string passed in the argument.
	*/
	
	this.createDoc = function(docServerManager, userConnInfo, params1, params2)
	{
		
		try
		{
          	var response = new org.json.JSONObject();
			
			println("\nExecuting createDoc script\n");
			
			//Tip : Use Single Quotes for strings and double quotes for JSON key/values. The combination of single-double quotes works perfectly in the script.
			// Tip: Ensure that the UniqueKey(ProductCode) you enter is not present already
			//var docStr = '{"ProductCode":"Z303","ProductName": "iPhone Mini 3","isActive":"Y","Color":"Green","Category":"Tablet","LaunchDate":"21-10-2017","Price":"41999","Quantity":12831}';
			
			var options = new java.util.HashMap();
			
			// The Entity Name is passed on via calling Entity script
			var sourceEntity = params1;
			var docStr =params2;
			/*
				'createDoc' requires 4 parameters
				
				sourceEntity : The Entity in which data needs to be committed.
				docStr : The JSON representing the data to be committed in String format.
				userConnInfo : object passed from the Entity source script to the function
				options : Java HashMap. For this lesson, we would pass an empty hashmap.
			*/
			var result = docServerManager.createDoc( sourceEntity, docStr, userConnInfo, options );

			response.put("Parameter", params1, params2);
			response.put("CallStatus", "success");
			response.put("CallResponse", result);
		}
		catch(e)
		{
			response.put("Parameter", params1, params2);
			response.put("CallStatus", "failed");	
			response.put("CallResponse", e);
		}
		finally
		{
			return response;
		}
	}
}

