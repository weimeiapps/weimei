package com.pay.api.model;

import java.io.Serializable;

public class Wit implements Serializable{
	private static final long serialVersionUID = 1L;
	private String clientNumber;
	private String userAccount;
	private String account;
	private String bank;
	private String branch;
	private String name;
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
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getBank() {
		return bank;
	}
	public void setBank(String bank) {
		this.bank = bank;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
