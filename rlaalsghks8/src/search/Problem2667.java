package search;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Problem2667 {
    static int dirX[] = {0, 0, -1, 1};
    static int dirY[] = {-1, 1, 0, 0};
    static int square[][];
    static boolean visit[][];
    static int regionCount;
    static int apartCount;
    static int N, d_x, d_y;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        N = Integer.parseInt(br.readLine().trim());
        List<Integer> list = new ArrayList<>();

        square = new int[N][N];
        visit = new boolean[N][N];

        // 배열에 값 넣기
        for (int i = 0; i < N; i++) {
            String input = br.readLine();
            for (int j = 0; j < N; j++) {
                square[i][j] = input.charAt(j) - '0';
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (square[i][j] == 1 && !visit[i][j]) {
                    regionCount = 0;
                    apartCount++;
                    DFS(i, j);
                    list.add(regionCount);
                }
            }
        }

        Collections.sort(list);

        bw.write(apartCount + "\n");
        for (int num : list) {
            bw.write(num + "\n");
        }

        bw.flush();
        bw.close();
    }

    public static void DFS(int x, int y) {
        visit[x][y] = true;
        regionCount++;

        for (int i = 0; i < 4; i++) {
            d_x = x + dirX[i];
            d_y = y + dirY[i];

            if (d_x >= 0 && d_x < N && d_y >= 0 && d_y < N) {
                if (!visit[d_x][d_y] && square[d_x][d_y] == 1) {
                    DFS(d_x, d_y);
                }
            }
        }
    }
}
