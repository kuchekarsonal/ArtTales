var getAllData_artgallery = function()
{
	this.getAllJSONDocs = function(docServerManager, userConnInfo, params1)
	{
		/*
			'getAllJSONDocs' would returns all the documents present in the given entity.
		*/
		
		try
		{
			var response = new org.json.JSONObject();
			
			println("\nExecuting getAllJSONDocs script\n");
			
			var options = new java.util.HashMap();

			var colValMap = new java.util.HashMap();

			// The Entity Name is passed on via calling Entity script
			var sourceEntity = params1;


			/*
				'getAllJSONDocs' requires 4 parameters
				
				sourceEntity : The Entity from which data needs to be fetched
				colValMap : Java HashMap. For this lesson, we would pass an empty hashmap.
				userConnInfo : object passed from the Entity source script to the function
				options : Java HashMap. For this lesson, we would pass an empty hashmap.
			*/
			var allProdDocs = docServerManager.getAllJSONDocs( sourceEntity , colValMap, userConnInfo, options);
			
			println("\n'" + allProdDocs.length() + "' records returned from source Entity '" + sourceEntity + "'.");

			println("\nFinished Executing getAllJSONDocs script\n");

			response.put("Parameter", params1);
			response.put("CallStatus", "success");
			response.put("CallResponse", allProdDocs);
		}
		catch(e)
		{
			response.put("Parameter", params1);
			response.put("CallStatus", "failed");
			response.put("CallResponse", e);
		}
		finally
		{
			return response;
		}
	}
}

