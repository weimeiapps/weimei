package com.pay.api.model;

import java.io.Serializable;

public class Notify implements Serializable{
	private static final long serialVersionUID = 1L;
	private String clientNumber;
	private String userAccount;
	private String clientOrderNumber;
	private String verifyText;
    private String tranId;
    private String c_amount;
    private String state;
    
	public String getClientNumber() {
		return clientNumber;
	}
	public void setClientNumber(String clientNumber) {
		this.clientNumber = clientNumber;
	}
	public String getUserAccount() {
		return userAccount;
	}
	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
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
	public String getTranId() {
		return tranId;
	}
	public void setTranId(String tranId) {
		this.tranId = tranId;
	}
	public String getC_amount() {
		return c_amount;
	}
	public void setC_amount(String c_amount) {
		this.c_amount = c_amount;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
    
	
}
