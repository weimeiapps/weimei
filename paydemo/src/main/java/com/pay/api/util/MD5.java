package com.pay.api.util;

import java.security.MessageDigest;

public class MD5 {
	String key = "c57f368a10b63b6b20ee70914ee972c2";
	public static String MD5(String s) {
	    try {
	        MessageDigest md = MessageDigest.getInstance("MD5");
	        byte[] bytes = md.digest(s.getBytes("utf-8"));
	        return toHex(bytes);
	    }
	    catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}

	private static String toHex(byte[] bytes) {

	    final char[] HEX_DIGITS = "0123456789ABCDEF".toCharArray();
	    StringBuilder ret = new StringBuilder(bytes.length * 2);
	    for (int i=0; i<bytes.length; i++) {
	        ret.append(HEX_DIGITS[(bytes[i] >> 4) & 0x0f]);
	        ret.append(HEX_DIGITS[bytes[i] & 0x0f]);
	    }
	    return ret.toString();
	}
	
	public static boolean ignoreCaseEquals(String str1,String str2){
		  return str1 == null ? str2 == null :str1.equalsIgnoreCase(str2);
	}
}
