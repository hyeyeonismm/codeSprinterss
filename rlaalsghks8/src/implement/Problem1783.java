package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1783 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        int N = Integer.parseInt(st.nextToken()); //세로
        int M = Integer.parseInt(st.nextToken());  //가로




        int count = 0;
        if (N == 1) {
            count = 1;
        } else if (N == 2) {
            count = Math.min(4, ((M + 1) / 2));
        } else if (M < 7) {
            count = Math.min(4, M);
        } else if(M >= 7){
            count = M - 2;
        }

        System.out.println(count);
    }
}
