package com.pay.api.http;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pay.api.model.Notify;
import com.pay.api.util.HttpPost;
import com.pay.api.util.JsonUtils;
import com.pay.api.util.MD5;

public class TaskNotify extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final Logger logger = LoggerFactory.getLogger(TaskNotify.class);
    public TaskNotify() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    try {
	    	logger.info("测试demo，异步taskNotify请求");
	    	String clientNumber = request.getParameter("clientNumber");
			String userAccount = request.getParameter("userAccount");
			String tranId = request.getParameter("tranId");
			String clientOrderNumber = request.getParameter("clientOrderNumber");
			String c_amount = request.getParameter("c_amount");
			String state = request.getParameter("state");
			String key = request.getParameter("key");
			String verifyText = MD5.MD5(clientNumber+tranId+state+key);
			response.setContentType("text/json;charset=UTF-8;");
			Notify n = new Notify();
			n.setClientNumber(clientNumber);
			n.setUserAccount(userAccount);
			n.setTranId(tranId);
			n.setClientOrderNumber(clientOrderNumber);
			n.setC_amount(c_amount);
			n.setState(state);
			n.setVerifyText(verifyText);
			String json = JsonUtils.objectToJson(n);
			String str = HttpPost.sendPost("http://gateway.bestpayltd.com:9900/taskNotify",json);
		    logger.debug("return:-----"+str);
			PrintWriter out = response.getWriter();
			out.println(str);
			out.flush();
			out.close();
			
	    }catch(Exception ex) {
	    	logger.error("测试demo，异步taskNotify 异常...");
	    }
	
	}

}
