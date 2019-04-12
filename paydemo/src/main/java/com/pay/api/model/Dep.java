package com.pay.api.model;

import java.io.Serializable;

public class Dep implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private String clientNumber;
	private String userAccount;
	private String userName;
	private String last4digies;
	private String amount;
	private String clientOrderNumber;
	private String verifyText;
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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getLast4digies() {
		return last4digies;
	}
	public void setLast4digies(String last4digies) {
		this.last4digies = last4digies;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
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
