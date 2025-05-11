package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 유기농배추1012 {
    static int[][] arr;
    static int cnt;
    static int[] dy = {-1, 1, 0, 0};
    static int[] dx = {0, 0, -1, 1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine()); // 테스트 케이스 수
        for (int i = 0; i < tc; i++) {
            cnt = 0;
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken()); // 가로 크기
            int y = Integer.parseInt(st.nextToken()); // 세로 크기
            int n = Integer.parseInt(st.nextToken()); // 배추가 심어진 위치의 개수
            arr = new int[y][x]; // 배추밭 크기 초기화

            // 배추 위치 입력
            for (int j = 0; j < n; j++) {
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                arr[b][a] = 1;
            }

            // 배추밭을 탐색하면서 BFS 수행
            for (int j = 0; j < y; j++) {
                for (int k = 0; k < x; k++) {
                    if (arr[j][k] == 1) {
                        bfs(j, k);
                    }
                }
            }
            System.out.println(cnt); // 각 테스트 케이스마다 필요한 지렁이 수 출력
        }
    }

    static void bfs(int a, int b) {
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{a, b});
        arr[a][b] = 0; // 방문 처리

        while (!q.isEmpty()) {
            int[] cur = q.poll();
            for (int i = 0; i < 4; i++) {
                int newX = cur[0] + dx[i];
                int newY = cur[1] + dy[i];

                // 배열 경계 체크
                if (newX >= 0 && newX < arr.length && newY >= 0 && newY < arr[0].length) {
                    if (arr[newX][newY] == 1) {
                        q.offer(new int[]{newX, newY});
                        arr[newX][newY] = 0; // 방문 처리
                    }
                }
            }
        }
        cnt++; // 하나의 연결된 배추 그룹에 대해 지렁이 수 증가
    }
}
