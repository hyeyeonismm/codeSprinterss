package stack;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Problem10773 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Stack<Integer> st = new Stack<Integer>();

        int K = Integer.parseInt(br.readLine());

        for(int i = 0; i < K; i++) {
            int n = Integer.parseInt(br.readLine());

            if(n==0){
                st.pop();
            }else{
                st.push(n);
            }
        }
        int sum = 0;

        for(int i = 0; i < st.size(); i++) {
            sum += st.pop();
        }

        System.out.println(sum);

    }
}
