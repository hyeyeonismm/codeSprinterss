package stack;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Problem9012 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());



        for(int i=0; i<N; i++){
            sb.append(solve(br.readLine())).append('\n');
        }

        System.out.println(sb);


    }

    public static String solve(String s){

        Stack<Character> stack = new Stack<>();

        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);

            if(c=='('){  //열린 괄호 넣기
                stack.push(c);
            }
            else if(stack.empty()){
                return "NO";
            }
            else{ //닫힌 괄호면 열린 괄호 꺼내기
                stack.pop();
            }
        }


        if(stack.empty()){
            return "YES";
        }else{
            return "NO";
        }

    }

}
