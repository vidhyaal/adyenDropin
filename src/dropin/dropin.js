// 0. Get originKey
getOriginKey().then(originKey => {
    getPaymentMethods().then(paymentMethodsResponse => {
        // 1. Create an instance of AdyenCheckout
        const checkout = new AdyenCheckout({
            environment: 'test',
            originKey: "pub.v2.7814658006340126.aHR0cHM6Ly9kcm9waW5jYXJ0Lmhlcm9rdWFwcC5jb20.mAGo7XjRRRz1E13MxOA0a0GLzLhQQQE4dWhhqtG9cgY", // Mandatory. originKey from Costumer Area
            paymentMethodsResponse,
			
            //removePaymentMethods: ['paysafecard', 'c_cash']
        });	

        // 2. Create and mount the Component
		
         const dropin = checkout
            .create('dropin', {
                // Events
               /*  onSelect: activeComponent => {
                    updateStateContainer(activeComponent.data); // Demo purposes only
                },*/
                onChange: state => {
                   ; // Demo purposes only
                }, 
                onSubmit: (state) => {
                     state.data;
                     state.isValid;
                    makePayment(state.data);
                   // alert("Response"+response.resultCode);
                }
            }) 
            .mount('#dropin-container');
            
    });
   
});

