package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Problem2217 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] ropeList  = new int[N];

        int maxKg = Integer.MIN_VALUE;

        for(int i=0; i<N; i++){
            int rope = Integer.parseInt(br.readLine());;
            ropeList[i] = rope;
        }

        Arrays.sort(ropeList);
        //10 30 35 오름차순으로 정렬 후 작은 수부터 로프 수를 줄이면서 곱한다.
        //큰 수를 비교해서 찾는 과정 진행

        for(int i=0; i<N; i++){
            maxKg = Math.max(maxKg, ropeList[i]*(N-i));
        }

        System.out.println(maxKg);



    }
}
