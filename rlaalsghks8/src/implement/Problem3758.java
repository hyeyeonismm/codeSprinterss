package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Problem3758 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));




        int T = Integer.parseInt(br.readLine());

        int[] answer = new int[T];
        for(int i=0; i<T; i++){
            StringTokenizer st = new StringTokenizer(br.readLine()," ");
            int n = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());
            int t = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());
            int[][] teamList = new int[n+1][2];   //점수,횟수
            int[][] problemList = new int [n+1][k+1]; //팀들의 각 문제 점수
            Stack<Integer> stack = new Stack<>();
            for(int j=1; j<=m; j++){
                StringTokenizer solv = new StringTokenizer(br.readLine()," ");
                int team = Integer.parseInt(solv.nextToken());
                int problem = Integer.parseInt(solv.nextToken());
                int score = Integer.parseInt(solv.nextToken());
                stack.push(team);

                if(problemList[team][problem]==0){
                    problemList[team][problem] = score;
                    teamList[team][0] += score;

                }else if(problemList[team][problem]<=score){
                    teamList[team][0] -= problemList[team][problem];
                    problemList[team][problem] = score;
                    teamList[team][0] += score;

                }
                teamList[team][1]++;
            }
            int rank = 1;
            for(int s=1; s<=n; s++){
                if(t==s){
                    continue;
                }
                if(teamList[t][0]<teamList[s][0]){
                    rank++;
                }else if(teamList[t][0]==teamList[s][0]){
                    if(teamList[t][1]>teamList[s][1]){
                        rank++;
                    }else if(teamList[t][1]==teamList[s][1]){
                        if(stack.search(t)<stack.search(s)){
                            rank++;
                        }
                    }
                }
            }
            answer[i] = rank;
        }

        for(int i=0; i<T; i++){
            System.out.println(answer[i]);
        }




    }
}
