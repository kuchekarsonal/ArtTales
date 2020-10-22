var wrapLoginArtgallery= function()
{
this.getAllJSONDocs= function(docServerManager, userConnInfo, params1,params2,params3)
{
 try
{

  var response = new org.json.JSONObject();

	 var jsOptions = {}

	  
	  
	  jsOptions.ColumnOptions="ColumnList";

	 var columnList= new org.json.JSONArray();

	 columnList.put("FirstName");

	 columnList.put("Account_Type");

	 jsOptions.ColumnList=columnList;

	 var options = toJavaMap(jsOptions);

	 var jsonQuery = {"ConditionOperator": "AND","Condition": [{"FieldName": "EmailId","Value": {"Type": "Text","Content": params2},"ConditionType": "="},{"FieldName": "Password","Value": {"Type": "text","Content": params3},"ConditionType": "="}]};

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