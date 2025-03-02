package DP;

import java.util.Scanner;

public class 타일01_1904 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n+1];

        arr[0] = 0;
        arr[1] = 1;
        if(n>1) arr[2] = 2;
        if(n>2) arr[3] = 3;

        for(int i=4;i<=n;i++){
            arr[i] = arr[i-1] + arr[i-2];
        }

        System.out.println(arr[n]%15746);
    }
}
