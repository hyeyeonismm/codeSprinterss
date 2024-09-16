package JungYujin.Algorithm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class 탑2493 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        Stack<int[]> s = new Stack<>();
        st = new StringTokenizer(br.readLine());
        int idx = 0;
        for(int i=1;i<=n;i++){
            int num = Integer.parseInt(st.nextToken());
            while(!s.isEmpty()){
                if(s.peek()[1]>=num){
                    System.out.print(s.peek()[0]+" ");
                    break;
                }
                s.pop();
            }
            if(s.isEmpty()) System.out.print("0 ");

            s.push(new int[] {i,num});

        }


    }
}

