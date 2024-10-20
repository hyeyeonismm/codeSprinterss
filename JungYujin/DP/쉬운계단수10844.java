package DP;

import java.util.Arrays;
import java.util.Scanner;

public class 쉬운계단수10844 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        long[][] arr = new long[n+1][10];
        for(int i=1;i<=9;i++) arr[1][i] = 1;

        for(int i=2;i<=n;i++) {
            for(int j=0;j<=9;j++) {
                if(j==0) arr[i][j] = arr[i-1][1]%1000000000;
                else if(j==9) arr[i][j] = arr[i-1][8]%1000000000;
                else arr[i][j] = (arr[i-1][j-1] + arr[i-1][j+1])%1000000000;
            }
        }
        System.out.println(Arrays.stream(arr[n]).sum()%1000000000);
    }
}
