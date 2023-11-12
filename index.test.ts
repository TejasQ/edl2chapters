import { describe, it, expect } from "vitest";
import { edl2chapters } from "./edl2chapters";

describe('edl2chapters', () => {
    it('should convert EDL to chapters', async () => {
        const edl = `TITLE: Timeline 1
FCM: NON-DROP FRAME

001  001      V     C        01:00:00:00 01:00:00:01 01:00:00:00 01:00:00:01  
 |C:ResolveColorBlue |M:Intro |D:1

002  001      V     C        01:03:33:19 01:03:33:20 01:03:33:19 01:03:33:20  
 |C:ResolveColorBlue |M:Sponsor (CrabNebula.dev) |D:1

003  001      V     C        01:04:21:13 01:04:21:14 01:04:21:13 01:04:21:14  
 |C:ResolveColorBlue |M:Defining Event Sourcing |D:1

004  001      V     C        01:07:47:26 01:07:47:27 01:07:47:26 01:07:47:27  
 |C:ResolveColorBlue |M:What are Events? (Domain Driven Design) |D:1

005  001      V     C        01:14:45:09 01:14:45:10 01:14:45:09 01:14:45:10  
 |C:ResolveColorBlue |M:Real-World Examples of Event Sourcing |D:1

006  001      V     C        01:19:52:00 01:19:52:01 01:19:52:00 01:19:52:01  
 |C:ResolveColorBlue |M:Complexities of Event Sourcing |D:1

007  001      V     C        01:21:33:23 01:21:33:24 01:21:33:23 01:21:33:24  
 |C:ResolveColorBlue |M:Storage Costs |D:1

008  001      V     C        01:23:36:09 01:23:36:10 01:23:36:09 01:23:36:10  
 |C:ResolveColorBlue |M:Computational Costs |D:1

009  001      V     C        01:24:10:00 01:24:10:01 01:24:10:00 01:24:10:01  
 |C:ResolveColorBlue |M:Snapshotting |D:1

010  001      V     C        01:35:15:00 01:35:15:01 01:35:15:00 01:35:15:01  
 |C:ResolveColorBlue |M:Event Ownership |D:1

011  001      V     C        01:36:19:13 01:36:19:14 01:36:19:13 01:36:19:14  
 |C:ResolveColorBlue |M:CQRS |D:1

012  001      V     C        01:44:08:25 01:44:08:26 01:44:08:25 01:44:08:26  
 |C:ResolveColorBlue |M:Consistency with Kafka |D:1

013  001      V     C        01:54:10:18 01:54:10:19 01:54:10:18 01:54:10:19  
 |C:ResolveColorBlue |M:Kafka Performance Mechanisms |D:1

014  001      V     C        02:03:05:23 02:03:05:24 02:03:05:23 02:03:05:24  
 |C:ResolveColorBlue |M:Kafka as an Event Store |D:1

015  001      V     C        02:04:13:03 02:04:13:04 02:04:13:03 02:04:13:04  
 |C:ResolveColorBlue |M:Zookeeper & KRaft |D:1

016  001      V     C        02:09:47:17 02:09:47:18 02:09:47:17 02:09:47:18  
 |C:ResolveColorBlue |M:Postgres WAL as an Event Store? |D:1

017  001      V     C        02:13:24:09 02:13:24:10 02:13:24:09 02:13:24:10  
 |C:ResolveColorBlue |M:Event Sourcing Use Cases |D:1

018  001      V     C        02:18:50:13 02:18:50:14 02:18:50:13 02:18:50:14  
 |C:ResolveColorBlue |M:Event Sourcing Problems |D:1

019  001      V     C        02:26:22:22 02:26:22:23 02:26:22:22 02:26:22:23  
 |C:ResolveColorBlue |M:Should You Event Source? |D:1

020  001      V     C        02:27:44:20 02:27:44:21 02:27:44:20 02:27:44:21  
 |C:ResolveColorBlue |M:Conclusion |D:1

`
        expect(await edl2chapters(edl)).toMatchInlineSnapshot(`
          "00:00 - Intro
          03:33 - Sponsor (CrabNebula.dev)
          04:21 - Defining Event Sourcing
          07:47 - What are Events? (Domain Driven Design)
          14:45 - Real-World Examples of Event Sourcing
          19:52 - Complexities of Event Sourcing
          21:33 - Storage Costs
          23:36 - Computational Costs
          24:10 - Snapshotting
          35:15 - Event Ownership
          36:19 - CQRS
          44:08 - Consistency with Kafka
          54:10 - Kafka Performance Mechanisms
          01:03:05 - Kafka as an Event Store
          01:04:13 - Zookeeper & KRaft
          01:09:47 - Postgres WAL as an Event Store?
          01:13:24 - Event Sourcing Use Cases
          01:18:50 - Event Sourcing Problems
          01:26:22 - Should You Event Source?
          01:27:44 - Conclusion"
        `);
    })
})