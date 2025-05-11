package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem4963 {
    static int arr[][];
    static boolean visited[][];
    static int dx[] = {0, 0, -1 ,1, -1, 1, -1, 1};
    static int dy[] = {-1, 1, 0, 0, 1, 1, -1, -1};
    static int nowX, nowY, w, h;

    public static void main(String[] args) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        String str;
        while (!(str = br.readLine()).equals("0 0")) {
            st = new StringTokenizer(str);

            w = Integer.parseInt(st.nextToken());
            h = Integer.parseInt(st.nextToken());
            arr = new int[h][w];
            visited = new boolean[h][w];

            for (int i = 0; i < h; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 0; j < w; j++) {
                    arr[i][j] = Integer.parseInt(st.nextToken());
                }
            }

            int island= 0;
            for (int i = 0; i < h; i++) {
                for (int j = 0; j < w; j++) {
                    if (!visited[i][j] && arr[i][j] == 1) {
                        island++;
                        dfs(i, j);
                    }
                }
            }

            sb.append(island).append('\n');
        }

        System.out.println(sb);
    }

    static void dfs(int x, int y) {
        visited[x][y] = true;
        for (int i = 0; i < 8; i++) {
            nowX = dx[i] + x;
            nowY = dy[i] + y;
            if (nowX >= 0 && nowY >= 0 && nowX < h && nowY < w && !visited[nowX][nowY] && arr[nowX][nowY] == 1) {
                dfs(nowX, nowY);
            }
        }
    }

}
