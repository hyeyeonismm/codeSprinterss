package DP;

import java.util.Scanner;

public class 일이삼더하기2_9095 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[11];
        arr[1] = 1;
        arr[2] = 2;
        arr[3] = 4;
        int tc = sc.nextInt();
        for(int i=4;i<11;i++){
            arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
        }
        for(int i=0;i<tc;i++){
            int n = sc.nextInt();
            System.out.println(arr[n]);
        }
    }
}
