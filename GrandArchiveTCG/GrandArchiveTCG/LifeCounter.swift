//
//  LifeCounter.swift
//  GrandArchiveTCG
//
//  Created by mathieu muty on 02/05/2024.
//

import SwiftUI

struct CounterView: View {
    var lifeP1: Int = 0
    var lifeP2: Int = 0
    
    var body: some View {
        VStack {
            HStack {
                Spacer()
            }
            Text("Hello world")
            Spacer()
        }
        .background(Color.red)
        .frame(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
        Divider().padding([.leading, .trailing])
        VStack(content: {
            HStack {
                Spacer()
            }
            Text("Placeholder")
            Spacer()
        }).background(Color.blue)
    }
}

extension CounterView {
    func addLifePoint(nb: Int, lp: Int) -> Int {
        return lp + nb
    }
}

#Preview {
    CounterView()
}
