package DP;

import java.util.Scanner;

public class 돌게임9655 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String winner="";
        if(n%2==0){
            System.out.println("CY");
        }else{
            System.out.println("SK");
        }
    }
}
