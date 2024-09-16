package JungYujin.Algorithm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class 스택수열1874 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader((new InputStreamReader(System.in)));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        Stack<Integer> s = new Stack<>();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = Integer.parseInt(br.readLine());
        }
        int cnt = 1;
        for(int i=0;i<n;i++){
            while(cnt<=arr[i]) {
                s.push(cnt++);
                sb.append("+\n");
            }
            if(!s.isEmpty() && s.peek()==arr[i]){
                s.pop();
                sb.append("-\n");
            }else {
                System.out.println("NO");
                return;
            }
        }
        System.out.println(sb.toString());
    }

}
