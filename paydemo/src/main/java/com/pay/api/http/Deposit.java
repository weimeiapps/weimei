package com.pay.api.http;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pay.api.model.Dep;
import com.pay.api.util.HttpPost;
import com.pay.api.util.JsonUtils;
import com.pay.api.util.MD5;

/**
 * Servlet implementation class Deposit
 */
public class Deposit extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final Logger logger = LoggerFactory.getLogger(Deposit.class);
    public Deposit() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try{
			logger.info("测试demo，代收请求");
			String clientNumber = request.getParameter("clientNumber");
			String userAccount = request.getParameter("userAccount");
			String amount = request.getParameter("amount");
			String userName = request.getParameter("userName");
			String last4digies = request.getParameter("last4digies");
			String clientOrderNumber = request.getParameter("clientOrderNumber");
			String key = request.getParameter("key");
			String verifyText = MD5.MD5(clientNumber+userAccount+userName+last4digies+amount+key);
			response.setContentType("text/json;charset=UTF-8;");
			Dep dep = new Dep();
			dep.setClientNumber(clientNumber);
			dep.setUserAccount(userAccount);
			dep.setUserName(userName);
			dep.setAmount(amount);
			dep.setLast4digies(last4digies);
			dep.setClientOrderNumber(clientOrderNumber);
			dep.setVerifyText(verifyText);
			String json = JsonUtils.objectToJson(dep);
			String str = HttpPost.sendPost("http://gateway.bestpayltd.com:9900/deposit",json);
		    logger.debug("return:-----"+str);
			PrintWriter out = response.getWriter();
			out.println(str);
			out.flush();
			out.close();
		}catch(Exception ex) {
			logger.info("测试demo，代收异常..");
		}
		
	}

}
