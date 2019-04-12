package com.pay.api.http;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pay.api.model.PayState;
import com.pay.api.util.HttpPost;
import com.pay.api.util.JsonUtils;
import com.pay.api.util.MD5;

public class GetOrder extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final Logger logger = LoggerFactory.getLogger(GetOrder.class); 
    public GetOrder() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			logger.info("测试demo，交易查询OrderState请求");
			String clientNumber = request.getParameter("clientNumber");
			String clientOrderNumber = request.getParameter("clientOrderNumber");
			String tranId = request.getParameter("tranId");
			String key = request.getParameter("key");
			String verifyText = MD5.MD5(clientNumber+tranId+key);
			response.setContentType("text/json;charset=UTF-8;");
			PayState p = new PayState();
			p.setClientNumber(clientNumber);
			p.setClientOrderNumber(clientOrderNumber);
			p.setTranId(tranId);
			p.setVerifyText(verifyText);
			String json = JsonUtils.objectToJson(p);
			String str = HttpPost.sendPost("http://gateway.bestpayltd.com:9900/getOrderState",json);
		    logger.debug("return:-----"+str);
			PrintWriter out = response.getWriter();
			out.println(str);
			out.flush();
			out.close();
		}catch(Exception ex) {
			logger.error("测试demo,交易查询错误getOrderState");
		}
	}

}
