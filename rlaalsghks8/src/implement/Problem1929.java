package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1929 {
    public static boolean[] prime;

    public static void main(String[] args)throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        int I = Integer.parseInt(st.nextToken());
        int J = Integer.parseInt(st.nextToken());

        prime = new boolean[J+1];  //default값은 false

        getPrime();

        StringBuilder sb = new StringBuilder();

        for(int i = I; i<=J; i++){
            if(!prime[i])
                sb.append(i).append('\n');
        }

        System.out.println(sb);
    }


    public static void getPrime(){
        prime[0] = prime[1] = true;   //false 소수

        for(int i=2; i<=Math.sqrt(prime.length); i++){ //sqrt하는 이유는 만약 1~10이면 3^2~4^2 사이이므로 2,3의 배수만 지워주면 됨
            if(prime[i])
                continue;
            for(int j=i*i; j<prime.length; j+=i){   //
                prime[j] = true;
            }
        }
    }
}
