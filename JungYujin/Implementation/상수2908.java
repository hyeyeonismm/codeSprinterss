package Implementation;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class 상수2908 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        String n1 = st.nextToken();
        String n2 = st.nextToken();
        String r1 = new StringBuilder(n1).reverse().toString();
        String r2 = new StringBuilder(n2).reverse().toString();
        System.out.println(Math.max(Integer.parseInt(r1),Integer.parseInt(r2)));
    }
}
