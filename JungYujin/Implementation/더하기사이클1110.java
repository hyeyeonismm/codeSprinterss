package Implementation;

import java.util.Scanner;

public class 더하기사이클1110 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int count = 0;
        int start = n;

        while (true) {
            n = ((n % 10) * 10) + (((n / 10) + (n % 10)) % 10);
            count++;

            if (start == n) {
                break;
            }
        }
        System.out.println(count);
    }
}
