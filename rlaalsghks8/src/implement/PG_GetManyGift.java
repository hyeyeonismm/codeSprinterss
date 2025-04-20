package implement;

import java.io.IOException;
import java.util.HashMap;

public class PG_GetManyGift {
    public int solution(String[] friends, String[] gifts)throws IOException {
        int answer = 0;

        int friendsLen = friends.length;

        HashMap<String,Integer> friendsMap = new HashMap<>();

        for(int i=0; i<friends.length; i++){
            friendsMap.put(friends[i],i);
        }

        int[] giftRate = new int[friendsLen];
        int[][] giftGraph = new int[friendsLen][friendsLen];

        for(int i=0; i<gifts.length; i++){
            String[] giftContent = gifts[i].split(" ");
            giftRate[friendsMap.get(giftContent[0])]++;
            giftRate[friendsMap.get(giftContent[1])]--;
            giftGraph[friendsMap.get(giftContent[0])][friendsMap.get(giftContent[1])]++;
        }

        for(int i=0; i<friendsLen; i++){
            int count = 0;
            for(int j=0; j<friendsLen; j++){
                if(i==j){
                    continue;
                }
                if(giftGraph[i][j]>giftGraph[j][i] || giftGraph[j][i] == giftGraph[i][j]
                        && giftRate[i]>giftRate[j]){
                    count++;
                }

                if(answer < count){
                    answer = count;
                }
            }
        }



        return answer;
    }
}
