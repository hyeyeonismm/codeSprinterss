package DP;

import java.util.Scanner;

public class 돌게임3_9657 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n+1];
        arr[1] = 1;
        if(n>1) arr[2] = 0;
        if(n>2) arr[3] = 1;
        if(n<3) arr[4] = 1;

        for(int i=5;i<=n;i++){
            if(arr[i-1]==1 && arr[i-3]==1 && arr[i-4]== 1){
                arr[i] = 0;
            }else{
                arr[i] = 1;
            }
        }
        if(arr[n]==1) System.out.println("SK");
        else System.out.println("CY");
    }
}
