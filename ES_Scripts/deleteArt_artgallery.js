var deleteDocs_artgallery = function()
{
	this.deleteDocsByQuery = function(docServerManager, userConnInfo, params1,params2)
	{
		
		/*
			'deleteDocsByQuery' API would delete records based on the documents matching the JSON query criteria passed in the argument.
		*/
		
		
		try
		{
			var response = new org.json.JSONObject();
			println("\nExecuting deleteDocsByQuery script\n");
			
          //var deleteProductIds = params2;
          //params2 = ["2","3","4"];o
                     
			/*
				Here, we have set 1 parameter for 'options' object
				'DeleteOptions' : This parameter can have 2 options 
					1. SkipDocsLockedByOtherUsers - This will only delete you own created documents
					2. ForceDelete - This will delete documents created by any user.
			*/
			var options = new java.util.HashMap();
				options.put("DeleteOptions","SkipDocsLockedByOtherUsers");
			
			// JSON Query to delete all documents which belong to category 'Camera'
			var deleteQuery = {"Condition":[{"FieldName":"ProductId","Value":{"Type":"Text","Content":params2},"ConditionType":"IN"}]};
				
           deleteQuery = JSON.stringify(deleteQuery);
           
			// The Entity Name is passed on via calling Entity script
			var sourceEntity = params1;

			/*
				'deleteDocsByQuery' requires 4 parameters
				
				sourceEntity : The target Entity from which data needs to be deleted.
				deleteQuery : JSON Query specifying the condition for which the matching data would be deleted.
				userConnInfo : object passed from the Entity source script to the function
				options : Java HashMap. For this lesson, we have configured options above as required.
			*/
			docServerManager.deleteDocsByQuery(sourceEntity, deleteQuery, userConnInfo, options);

			response.put("Parameter", params1);
			response.put("CallStatus", "success");
			response.put("CallResponse", "");
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

// var params1 = "Product_artgallery";
// var WrapperObj = new deleteDocs_artgallery();
// var resultData = WrapperObj.deleteDocsByQuery(docServerManager, userConnInfo, params1);
// output = resultData.toString();

