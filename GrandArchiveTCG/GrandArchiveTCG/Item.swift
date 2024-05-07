//
//  Item.swift
//  GrandArchiveTCG
//
//  Created by mathieu muty on 02/05/2024.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
