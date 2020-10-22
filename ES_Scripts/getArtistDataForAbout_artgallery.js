var getOurArtists_artgallery= function()
{
this.getArtistData= function(docServerManager, userConnInfo, params1)
{
 try
{

  var response = new org.json.JSONObject();

	 var jsOptions = {}		
	 var options = toJavaMap(jsOptions);

	 var jsonQuery = {"Condition": [{"FieldName": "Account_Type","Value": {"Type": "Text","Content": "Artist"},"ConditionType": "="}]};

	 jsonQuery = JSON.stringify(jsonQuery);
 
	 var sourceEntity = params1;
  
	  var allProdDocs = docServerManager.getJSONDocsByQuery( sourceEntity , jsonQuery, userConnInfo, options);
	  print(allProdDocs);
	  var count = allProdDocs.length();
	  println("\n'" + allProdDocs.length() + "' records returned from source Entity '" + sourceEntity + "'.");
	  if(count ==0)
	  {	throw("No records found");}
	   
		
		response.put("CallStatus", "success");
		response.put("CallResponse", allProdDocs);
	  
}
catch(e)
{
	
	response.put("CallStatus", "failed");
	response.put("CallResponse", e);
}
finally
{
	return response;
}
}
}

/*var WrapperObj = new loginArtgallery();
var resultData = WrapperObj.getJSONDocsByQueryANDCondition(docServerManager, userConnInfo, "SignUp_artgallery","kuch@gmail.com","1234");
output = resultData.toString();
*/