
Ext.data.DWRGridProxy = function(config){
	Ext.apply(this, config); // necessary since the superclass doesn't call apply
    Ext.data.DWRGridProxy.superclass.constructor.call(this);
};

Ext.extend(Ext.data.DWRGridProxy, Ext.data.DataProxy, {
	params : {},

	load : function(params, reader, loadCallback, scope, arg) {
		var dataProxy = this;
		this.params = Ext.apply(this.params,params||{});

		if (dataProxy.fireEvent("beforeload", dataProxy, params) !== false) {
			if(!this.dwrMethod){
				this.fireEvent("loadexception",this, null,'dwrMethod undefined !');
				return;
			}
			var dwrArgs = []; 
			dwrArgs.push(this.params);
			dwrArgs.push({
				callback: function(response){
					var records = reader.readRecords(response); 
					dataProxy.fireEvent("load", dataProxy, response, loadCallback);
					loadCallback.call(scope||this, records, arg, true);
				},
				errorHandler: function(message){
					dataProxy.fireEvent("loadexception", dataProxy, message, loadCallback, e);
					loadCallback.call(scope||this, null, arg, false);
				}
			});
			this.dwrMethod.apply(scope||this, dwrArgs);
		} else { // the beforeload event was vetoed
			loadCallback.call(scope||this, null, arg, false);
		}
	}
});