package com.pay.api.http;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.pay.api.model.Wit;
import com.pay.api.util.HttpPost;
import com.pay.api.util.JsonUtils;
import com.pay.api.util.MD5;

public class Withdraw extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final Logger logger = LoggerFactory.getLogger(Withdraw.class);
	
    public Withdraw() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			logger.info("测试demo，代付withdraw请求");
			String clientNumber = request.getParameter("clientNumber");
			String userAccount = request.getParameter("userAccount");
			String amount = request.getParameter("amount");
			String clientOrderNumber = request.getParameter("clientOrderNumber");
			String key = request.getParameter("key");
			String bank = request.getParameter("bank");
			String branch = request.getParameter("branch");
			String name = request.getParameter("name");
			String account = request.getParameter("account");
			String verifyText = MD5.MD5(clientNumber+userAccount+account+amount+key);
			response.setContentType("text/json;charset=UTF-8;");
			Wit w = new Wit();
			w.setClientNumber(clientNumber);
			w.setUserAccount(userAccount);
			w.setAccount(account);
			w.setAmount(amount);
			w.setClientOrderNumber(clientOrderNumber);
			w.setBank(bank);
			w.setBranch(branch);
			w.setName(name);
			w.setVerifyText(verifyText);
			String json = JsonUtils.objectToJson(w);
			String str = HttpPost.sendPost("http://gateway.bestpayltd.com:9900/withdraw",json);
		    logger.debug("return:-----"+str);
			PrintWriter out = response.getWriter();
			out.println(str);
			out.flush();
			out.close();
		}catch(Exception ex) {
			logger.error("测试demo，代收异常..");
		}
	}

}
