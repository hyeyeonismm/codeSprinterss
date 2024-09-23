package greedy;

import java.io.*;

public class Problem2839
{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());

        //봉지수
        int count=0;

        while(true){
            //가장 큰 수인 5를 먼저 처리하고
            if(n%5==0){
                count +=n/5;
                bw.write(String.valueOf(count));
                break;
            }
            //남은 무게 3으로 처리해서 갯수 계산
            n-=3;
            count++;

            if(n<0){
                bw.write(String.valueOf(-1));
                break;
            }
        }

        bw.flush();
        bw.close();

    }
}
