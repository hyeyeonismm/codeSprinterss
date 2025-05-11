package DP;

import java.util.Arrays;

public class 정수삼각형 {
    public int solution(int[][] triangle) {
        int i;
        int j;
        for(i=1;i<triangle.length;i++){
            for(j=0;j<triangle[i].length;j++){
                if(j==0) {triangle[i][j] += triangle[i-1][j];}
                else if(j==triangle[i].length-1) {
                    triangle[i][j] += triangle[i-1][j-1];}
                else {triangle[i][j] += Math.max(triangle[i-1][j], triangle[i-1][j-1]);}

            }
        }
        return Arrays.stream(triangle[i-1]).max().getAsInt();
    }
}
