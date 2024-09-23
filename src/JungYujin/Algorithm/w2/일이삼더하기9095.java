package JungYujin.Algorithm.w2;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class 일이삼더하기9095 {
    public static void main(String[] args) throws Exception {
        int[] arr = new int[12];
        arr[0] = 0;
        arr[1] = 1; //1
        arr[2] = 2; //2, 1+1
        arr[3] = 4; //3, 1+2, 2+1, 1+1+1

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        for(int i=4;i<=11;i++) {
            arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
        }
        for(int i=0;i<n;i++) {
            int a = Integer.parseInt(br.readLine());
            System.out.println(arr[a]);
        }
    }
}
