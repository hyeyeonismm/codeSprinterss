package w2;

import java.util.Scanner;

public class 수이어쓰기1748 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int result = 0;
        int cnt = 1;
        int check = 10;
        for(int i=1;i<=n;i++) {
            if(i==check) {
                cnt++;
                check *= 10;
            }
            result += cnt;
        }
        System.out.println(result);
    }
}
