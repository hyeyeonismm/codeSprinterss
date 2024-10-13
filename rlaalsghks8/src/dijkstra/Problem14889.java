package dijkstra;

import java.util.*;
import java.io.*;

public class Problem14889 {

    static int N;
    static int[][] board;
    static boolean[] visited;
    static int MIN_RESULT = Integer.MAX_VALUE;

    public static void main(String args[]) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());

        board = new int[N][N];
        visited = new boolean[N];

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        combination(0, 0);
        System.out.println(MIN_RESULT);

    }

    // 팀 나누기 true는 start 팀, false인 경우는 link팀
    static void combination(int dep, int start) {
        if(dep == N / 2) {
            MIN_RESULT = Math.min(MIN_RESULT, getResult());
            return;
        }

        for(int i = start; i < N; i++) {
            visited[i] = true;
            combination(dep + 1, i + 1);
            visited[i] = false;
        }
    }

    // 나눈 팀의 차이값 계산
    static int getResult() {
        int start = 0;
        int link = 0;

        for(int i = 0; i < N; i++) {  // 배열 인덱스를 0부터 사용
            for(int j = 0; j < N; j++) {
                if(i == j) continue;  // i와 j가 같을 경우는 제외

                if(visited[i] && visited[j]) start += board[i][j];  // 스타트 팀 능력치 계산
                if(!visited[i] && !visited[j]) link += board[i][j];  // 링크 팀 능력치 계산
            }
        }
        return Math.abs(start - link);  // 두 팀 능력치 차이 계산
    }

}