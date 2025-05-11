package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.*;

public class Problem1292 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        ArrayList<Integer> list = new ArrayList<Integer>();
        StringTokenizer st = new StringTokenizer(br.readLine());

        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());

        int sum = 0;

        // 충분히 큰 리스트를 만들기 위해 1000이 아닌 그 이상으로 설정
        for(int i = 1; list.size() < end; i++) {  // list의 크기가 end 이상이 될 때까지 반복
            for(int j = 0; j < i; j++) {
                list.add(i);
                if(list.size() >= end) break; // 필요 이상으로 리스트를 채우지 않도록 중단
            }
        }

        // start부터 end까지의 합을 계산
        for(int i = start - 1; i < end; i++) {
            sum += list.get(i);
        }

        System.out.println(sum);
    }
}