package bruteforce;

import java.util.*;
import java.io.*;
//숫자 정사각형
public class Problem1051{
    static int N;
    static int M;
    static int[][] square;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        square = new int[N][M];
        int len = Math.min(N, M);

        for (int i = 0; i < N; i++) {
            String input = br.readLine();
            for (int j = 0; j < M; j++) {
                square[i][j] = input.charAt(j) - '0';
            }
        }

        while (len > 1) {
            for (int i = 0; i <= N - len; i++) {
                for (int j = 0; j <= M - len; j++) {
                    int num = square[i][j];
                    if (num == square[i][j + len - 1] && num == square[i + len - 1][j] && num == square[i + len - 1][j + len - 1]) {
                        System.out.println(len * len);
                        return;
                    }
                }
            }
            len--;
        }

        System.out.println(len * len);
    }
}