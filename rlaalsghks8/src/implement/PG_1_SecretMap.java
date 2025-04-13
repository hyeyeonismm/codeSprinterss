package implement;

import java.io.IOException;

public class PG_1_SecretMap {
    public String[] solution(int n, int[] arr1, int[] arr2)throws IOException {
        String[] answer = new String[n];


        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = n - 1; j >= 0; j--) {

                if ((arr1[i] & (1 << j)) != 0 || (arr2[i] & (1 << j)) != 0) {
                    sb.append("#");
                } else {
                    sb.append(" ");
                }
            }
            answer[i] = sb.toString();
        }
        return answer;



    }
}
