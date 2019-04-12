package com.pay.api.model;

import java.io.Serializable;

public class PayState implements Serializable{
	private static final long serialVersionUID = 1L;
	private String clientNumber;
	private String tranId;
	private String clientOrderNumber;
	private String verifyText;
	
	public String getClientNumber() {
		return clientNumber;
	}
	public void setClientNumber(String clientNumber) {
		this.clientNumber = clientNumber;
	}
	public String getTranId() {
		return tranId;
	}
	public void setTranId(String tranId) {
		this.tranId = tranId;
	}
	public String getClientOrderNumber() {
		return clientOrderNumber;
	}
	public void setClientOrderNumber(String clientOrderNumber) {
		this.clientOrderNumber = clientOrderNumber;
	}
	public String getVerifyText() {
		return verifyText;
	}
	public void setVerifyText(String verifyText) {
		this.verifyText = verifyText;
	}
	
}
