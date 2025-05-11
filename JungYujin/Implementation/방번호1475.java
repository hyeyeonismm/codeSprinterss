package Implementation;

import java.util.Arrays;
import java.util.Scanner;

public class 방번호1475 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String room_number = sc.next();
        int[] cnt = new int[9];

        for (int i=0; i<room_number.length(); i++) {
            int num = room_number.charAt(i) - '0';

            if (num == 9) num = 6; // 9 → 6
            cnt[num]++;
        }

        cnt[6] = cnt[6]/2 + cnt[6]%2;

        Arrays.sort(cnt);
        System.out.println(cnt[8]);

    }
}
