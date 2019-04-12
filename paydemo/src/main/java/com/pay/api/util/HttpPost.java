package com.pay.api.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class HttpPost {

	/**
     * 向指定URL发送POST方法的请求
     *
     * @param url
     *            发送请求的URL
     * @param param
     *            请求参数，请求参数应该是name1=value1&name2=value2的形式。
     * @return URL所代表远程资源的响应
     */
	private static final Log logger = LogFactory.getLog(HttpPost.class);
    public static String sendPost(String url, String param) {
    	
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection conn = realUrl.openConnection();
            // 设置通用的请求属性
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)");
            // 设置超时时间
            conn.setConnectTimeout(200000);
            conn.setReadTimeout(200000);
            // 发送POST请求必须设置如下两行
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // 获取URLConnection对象对应的输出流
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            result = "Post:服务器连接失败！";
            //e.printStackTrace();
            logger.error("post-连接异常....");
            
        }
        // 使用finally块来关闭输出流、输入流
        finally {
            try {
                if (out != null) {
                    out.close();
                }
                if (in != null) {
                    in.close();
                }
            } catch (IOException ex) {
            	 logger.error("post-连接异常....IO通讯--------接口有问题");
            	//ex.printStackTrace();
            }
        }
        return result;
    }
    
    
    /**
     * 发送http get请求
     * 
     * @param getUrl
     * @return
     */
    public static  String sendGetRequest(String getUrl)
    {
       StringBuffer sb = new StringBuffer();
       InputStreamReader isr = null;
       BufferedReader br = null;
       try
       {
          URL url = new URL(getUrl);
          URLConnection urlConnection = url.openConnection();
          urlConnection.setAllowUserInteraction(false);
          isr = new InputStreamReader(url.openStream());
          br = new BufferedReader(isr);
          String line;
          while ((line = br.readLine()) != null)
          {
             sb.append(line);
          }
       }
       catch (IOException e)
       {
          e.printStackTrace();
       }
       finally
       {
        // isr.closeResources(isr, br);
       }
       return sb.toString();
    
 }

}
