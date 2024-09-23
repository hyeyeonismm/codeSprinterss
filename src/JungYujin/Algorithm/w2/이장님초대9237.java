package JungYujin.Algorithm.w2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class 이장님초대9237 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        Integer[] trees = new Integer[n];
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) trees[i] = Integer.parseInt(st.nextToken());
        Arrays.sort(trees, Collections.reverseOrder());

        int day = 1;
        for(int i=0;i<n;i++) {
            trees[i] = trees[i]+day++;
        }
        Arrays.sort(trees, Collections.reverseOrder());
        System.out.println(trees[0]+1);
    }
}
