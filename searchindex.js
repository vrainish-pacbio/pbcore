Search.setIndex({envversion:46,filenames:["index","modules","pbcore","pbcore.chemistry","pbcore.data","pbcore.data.datasets","pbcore.io","pbcore.io.align","pbcore.io.dataset","pbcore.model","pbcore.util"],objects:{"":{pbcore:[2,0,0,"-"]},"pbcore.chemistry":{chemistry:[3,0,0,"-"]},"pbcore.chemistry.chemistry":{ChemistryLookupError:[3,3,1,""],decodeTriple:[3,5,1,""],tripleFromMetadataXML:[3,5,1,""]},"pbcore.data":{datasets:[5,0,0,"-"],getBamAndCmpH5:[4,5,1,""],getBasH5_v20:[4,5,1,""],getBasH5_v21:[4,5,1,""],getBasH5_v23:[4,5,1,""],getBasH5s:[4,5,1,""],getBaxForBam:[4,5,1,""],getBaxH5_v20:[4,5,1,""],getBaxH5_v21:[4,5,1,""],getBaxH5_v23:[4,5,1,""],getBcFofn:[4,5,1,""],getBcH5s:[4,5,1,""],getBlasrM4:[4,5,1,""],getBlasrM5:[4,5,1,""],getCCSBAM:[4,5,1,""],getCCSH5:[4,5,1,""],getCmpH5:[4,5,1,""],getCmpH5AndBas:[4,5,1,""],getCmpH5s:[4,5,1,""],getDosFormattedFasta:[4,5,1,""],getFasta:[4,5,1,""],getFofns:[4,5,1,""],getGff3:[4,5,1,""],getLambdaFasta:[4,5,1,""],getTinyFasta:[4,5,1,""],getUnalignedBam:[4,5,1,""]},"pbcore.data.datasets":{getBam:[5,5,1,""],getFofn:[5,5,1,""],getHdfSubreadSet:[5,5,1,""],getRef:[5,5,1,""],getStats:[5,5,1,""],getSubreadSet:[5,5,1,""],getXml:[5,5,1,""],getXmlWithStats:[5,5,1,""]},"pbcore.io":{BamAlignment:[6,4,1,""],BamReader:[6,4,1,""],BasH5Reader:[6,4,1,""],CmpH5Alignment:[6,4,1,""],CmpH5Reader:[6,4,1,""],FastaReader:[6,4,1,""],FastaRecord:[6,4,1,""],FastaTable:[6,1,1,""],FastaWriter:[6,4,1,""],FastqReader:[6,4,1,""],FastqRecord:[6,4,1,""],FastqWriter:[6,4,1,""],Gff3Record:[6,4,1,""],GffReader:[6,4,1,""],GffWriter:[6,4,1,""],IndexedBamReader:[6,4,1,""],align:[7,0,0,"-"],openAlignmentFile:[6,5,1,""],openIndexedAlignmentFile:[6,5,1,""]},"pbcore.io.BamAlignment":{DeletionQV:[6,2,1,""],DeletionTag:[6,2,1,""],HoleNumber:[6,1,1,""],IPD:[6,2,1,""],InsertionQV:[6,2,1,""],MapQV:[6,1,1,""],MergeQV:[6,2,1,""],PulseWidth:[6,2,1,""],SubstitutionQV:[6,2,1,""],barcode:[6,1,1,""],barcodeName:[6,1,1,""],clippedTo:[6,2,1,""],identity:[6,1,1,""],isCCS:[6,1,1,""],isForwardStrand:[6,1,1,""],isMapped:[6,1,1,""],isReverseStrand:[6,1,1,""],isUnmapped:[6,1,1,""],mapQV:[6,1,1,""],movieName:[6,1,1,""],numPasses:[6,1,1,""],pulseFeature:[6,2,1,""],qEnd:[6,1,1,""],qId:[6,1,1,""],qLen:[6,1,1,""],qName:[6,1,1,""],qStart:[6,1,1,""],queryEnd:[6,1,1,""],queryName:[6,1,1,""],queryStart:[6,1,1,""],read:[6,2,1,""],readGroupInfo:[6,1,1,""],readPositions:[6,2,1,""],readType:[6,1,1,""],reader:[6,1,1,""],reference:[6,2,1,""],referenceId:[6,1,1,""],referenceInfo:[6,1,1,""],referenceName:[6,1,1,""],referencePositions:[6,2,1,""],sequencingChemistry:[6,1,1,""],tId:[6,1,1,""],transcript:[6,2,1,""],unrolledCigar:[6,2,1,""],zScore:[6,1,1,""]},"pbcore.io.BamReader":{index:[6,1,1,""],readsInRange:[6,2,1,""]},"pbcore.io.BasH5IO":{Zmw:[6,4,1,""],ZmwRead:[6,4,1,""]},"pbcore.io.BasH5IO.Zmw":{adapterRegions:[6,1,1,""],adapterRegionsNoQC:[6,1,1,""],adapters:[6,1,1,""],adaptersNoQC:[6,1,1,""],baxH5:[6,1,1,""],ccsRead:[6,1,1,""],holeNumber:[6,1,1,""],hqRegion:[6,1,1,""],hqRegionSnr:[6,1,1,""],index:[6,1,1,""],insertRegions:[6,1,1,""],insertRegionsNoQC:[6,1,1,""],listZmwMetrics:[6,2,1,""],numPasses:[6,1,1,""],productivity:[6,1,1,""],read:[6,2,1,""],readNoQC:[6,2,1,""],readScore:[6,1,1,""],regionTable:[6,1,1,""],subreads:[6,1,1,""],subreadsNoQC:[6,1,1,""],zmwMetric:[6,2,1,""],zmwName:[6,1,1,""]},"pbcore.io.BasH5IO.ZmwRead":{DeletionQV:[6,2,1,""],DeletionTag:[6,2,1,""],IPD:[6,2,1,""],InsertionQV:[6,2,1,""],MergeQV:[6,2,1,""],PreBaseFrames:[6,2,1,""],PulseWidth:[6,2,1,""],QualityValue:[6,2,1,""],SubstitutionQV:[6,2,1,""],SubstitutionTag:[6,2,1,""],WidthInFrames:[6,2,1,""],basecalls:[6,2,1,""],baxH5:[6,1,1,""],holeNumber:[6,1,1,""],offsetBegin:[6,1,1,""],offsetEnd:[6,1,1,""],qv:[6,2,1,""],readEnd:[6,1,1,""],readName:[6,1,1,""],readStart:[6,1,1,""],zmw:[6,1,1,""]},"pbcore.io.BasH5Reader":{CCSZmwRead:[6,4,1,""],Zmw:[6,4,1,""],ZmwRead:[6,4,1,""],allSequencingZmws:[6,1,1,""],ccsReads:[6,2,1,""],chemistryBarcodeTriple:[6,1,1,""],close:[6,2,1,""],hasConsensusBasecalls:[6,1,1,""],hasRawBasecalls:[6,1,1,""],movieName:[6,1,1,""],parts:[6,1,1,""],reads:[6,2,1,""],sequencingChemistry:[6,1,1,""],sequencingZmws:[6,1,1,""],subreads:[6,2,1,""]},"pbcore.io.BasH5Reader.CCSZmwRead":{readName:[6,1,1,""]},"pbcore.io.BasH5Reader.Zmw":{adapterRegions:[6,1,1,""],adapterRegionsNoQC:[6,1,1,""],adapters:[6,1,1,""],adaptersNoQC:[6,1,1,""],baxH5:[6,1,1,""],ccsRead:[6,1,1,""],holeNumber:[6,1,1,""],hqRegion:[6,1,1,""],hqRegionSnr:[6,1,1,""],index:[6,1,1,""],insertRegions:[6,1,1,""],insertRegionsNoQC:[6,1,1,""],listZmwMetrics:[6,2,1,""],numPasses:[6,1,1,""],productivity:[6,1,1,""],read:[6,2,1,""],readNoQC:[6,2,1,""],readScore:[6,1,1,""],regionTable:[6,1,1,""],subreads:[6,1,1,""],subreadsNoQC:[6,1,1,""],zmwMetric:[6,2,1,""],zmwName:[6,1,1,""]},"pbcore.io.BasH5Reader.ZmwRead":{DeletionQV:[6,2,1,""],DeletionTag:[6,2,1,""],IPD:[6,2,1,""],InsertionQV:[6,2,1,""],MergeQV:[6,2,1,""],PreBaseFrames:[6,2,1,""],PulseWidth:[6,2,1,""],QualityValue:[6,2,1,""],SubstitutionQV:[6,2,1,""],SubstitutionTag:[6,2,1,""],WidthInFrames:[6,2,1,""],basecalls:[6,2,1,""],baxH5:[6,1,1,""],holeNumber:[6,1,1,""],offsetBegin:[6,1,1,""],offsetEnd:[6,1,1,""],qv:[6,2,1,""],readEnd:[6,1,1,""],readName:[6,1,1,""],readStart:[6,1,1,""],zmw:[6,1,1,""]},"pbcore.io.CmpH5Alignment":{DeletionQV:[6,2,1,""],DeletionTag:[6,2,1,""],IPD:[6,2,1,""],InsertionQV:[6,2,1,""],MergeQV:[6,2,1,""],PulseWidth:[6,2,1,""],QualityValue:[6,2,1,""],ReadGroupID:[6,1,1,""],SubstitutionQV:[6,2,1,""],aEnd:[6,1,1,""],aStart:[6,1,1,""],accuracy:[6,1,1,""],alignmentArray:[6,2,1,""],barcode:[6,1,1,""],barcodeName:[6,1,1,""],clippedTo:[6,2,1,""],cmpH5:[6,1,1,""],holeNumber:[6,1,1,""],identity:[6,1,1,""],isForwardStrand:[6,1,1,""],isReverseStrand:[6,1,1,""],mapQV:[6,1,1,""],movieInfo:[6,1,1,""],movieName:[6,1,1,""],numPasses:[6,1,1,""],pulseFeature:[6,2,1,""],qId:[6,1,1,""],read:[6,2,1,""],readGroupInfo:[6,1,1,""],readPositions:[6,2,1,""],readType:[6,1,1,""],reader:[6,1,1,""],reference:[6,2,1,""],referenceId:[6,1,1,""],referenceInfo:[6,1,1,""],referenceName:[6,1,1,""],referencePositions:[6,2,1,""],rowNumber:[6,1,1,""],sequencingChemistry:[6,1,1,""],similarity:[6,1,1,""],transcript:[6,2,1,""],zScore:[6,1,1,""]},"pbcore.io.CmpH5Reader":{ReadGroupID:[6,1,1,""],alignmentIndex:[6,1,1,""],barcode:[6,1,1,""],barcodeName:[6,1,1,""],barcodes:[6,1,1,""],close:[6,2,1,""],hasPulseFeature:[6,2,1,""],holeNumber:[6,1,1,""],index:[6,1,1,""],isBarcoded:[6,1,1,""],isEmpty:[6,1,1,""],isSorted:[6,1,1,""],mapQV:[6,1,1,""],movieInfo:[6,2,1,""],movieInfoTable:[6,1,1,""],movieNames:[6,1,1,""],pulseFeaturesAvailable:[6,2,1,""],qId:[6,1,1,""],readGroupInfo:[6,2,1,""],readGroupTable:[6,1,1,""],readType:[6,1,1,""],readsInRange:[6,2,1,""],referenceInfo:[6,2,1,""],referenceInfoTable:[6,1,1,""],sequencingChemistry:[6,1,1,""],softwareVersion:[6,2,1,""],version:[6,1,1,""],versionAtLeast:[6,2,1,""]},"pbcore.io.FastaRecord":{comment:[6,1,1,""],fromString:[6,6,1,""],header:[6,1,1,""],id:[6,1,1,""],length:[6,1,1,""],name:[6,1,1,""],reverseComplement:[6,2,1,""],sequence:[6,1,1,""]},"pbcore.io.FastaWriter":{writeRecord:[6,2,1,""]},"pbcore.io.FastqRecord":{comment:[6,1,1,""],fromString:[6,6,1,""],header:[6,1,1,""],id:[6,1,1,""],length:[6,1,1,""],name:[6,1,1,""],quality:[6,1,1,""],qualityString:[6,1,1,""],reverseComplement:[6,2,1,""],sequence:[6,1,1,""]},"pbcore.io.FastqWriter":{writeRecord:[6,2,1,""]},"pbcore.io.Gff3Record":{copy:[6,2,1,""],fromString:[6,6,1,""]},"pbcore.io.IndexedBamReader":{atRowNumber:[6,2,1,""],index:[6,1,1,""],readsInRange:[6,2,1,""]},"pbcore.io.align":{BamAlignment:[7,0,0,"-"],BamIO:[7,0,0,"-"],BlasrIO:[7,0,0,"-"],CmpH5IO:[7,0,0,"-"],PacBioBamIndex:[7,0,0,"-"]},"pbcore.io.align.BamAlignment":{BamAlignment:[7,4,1,""]},"pbcore.io.align.BamAlignment.BamAlignment":{DeletionQV:[7,2,1,""],DeletionTag:[7,2,1,""],HoleNumber:[7,1,1,""],IPD:[7,2,1,""],InsertionQV:[7,2,1,""],MapQV:[7,1,1,""],MergeQV:[7,2,1,""],PulseWidth:[7,2,1,""],SubstitutionQV:[7,2,1,""],barcode:[7,1,1,""],barcodeName:[7,1,1,""],clippedTo:[7,2,1,""],identity:[7,1,1,""],isCCS:[7,1,1,""],isForwardStrand:[7,1,1,""],isMapped:[7,1,1,""],isReverseStrand:[7,1,1,""],isUnmapped:[7,1,1,""],mapQV:[7,1,1,""],movieName:[7,1,1,""],numPasses:[7,1,1,""],pulseFeature:[7,2,1,""],qEnd:[7,1,1,""],qId:[7,1,1,""],qLen:[7,1,1,""],qName:[7,1,1,""],qStart:[7,1,1,""],queryEnd:[7,1,1,""],queryName:[7,1,1,""],queryStart:[7,1,1,""],read:[7,2,1,""],readGroupInfo:[7,1,1,""],readPositions:[7,2,1,""],readType:[7,1,1,""],reader:[7,1,1,""],reference:[7,2,1,""],referenceId:[7,1,1,""],referenceInfo:[7,1,1,""],referenceName:[7,1,1,""],referencePositions:[7,2,1,""],sequencingChemistry:[7,1,1,""],tId:[7,1,1,""],transcript:[7,2,1,""],unrolledCigar:[7,2,1,""],zScore:[7,1,1,""]},"pbcore.io.align.BamIO":{BamReader:[7,4,1,""],IndexedBamReader:[7,4,1,""]},"pbcore.io.align.BamIO.BamReader":{index:[7,1,1,""],readsInRange:[7,2,1,""]},"pbcore.io.align.BamIO.IndexedBamReader":{atRowNumber:[7,2,1,""],index:[7,1,1,""],readsInRange:[7,2,1,""]},"pbcore.io.align.BlasrIO":{M4Reader:[7,4,1,""],M4Record:[7,4,1,""],M5Reader:[7,4,1,""],M5Record:[7,4,1,""]},"pbcore.io.align.BlasrIO.M4Record":{fromString:[7,6,1,""]},"pbcore.io.align.BlasrIO.M5Record":{fromString:[7,6,1,""]},"pbcore.io.align.CmpH5IO":{CmpH5Alignment:[7,4,1,""],CmpH5Reader:[7,4,1,""],EmptyCmpH5Error:[7,3,1,""]},"pbcore.io.align.CmpH5IO.CmpH5Alignment":{DeletionQV:[7,2,1,""],DeletionTag:[7,2,1,""],IPD:[7,2,1,""],InsertionQV:[7,2,1,""],MergeQV:[7,2,1,""],PulseWidth:[7,2,1,""],QualityValue:[7,2,1,""],ReadGroupID:[7,1,1,""],SubstitutionQV:[7,2,1,""],aEnd:[7,1,1,""],aStart:[7,1,1,""],accuracy:[7,1,1,""],alignmentArray:[7,2,1,""],barcode:[7,1,1,""],barcodeName:[7,1,1,""],clippedTo:[7,2,1,""],cmpH5:[7,1,1,""],holeNumber:[7,1,1,""],identity:[7,1,1,""],isForwardStrand:[7,1,1,""],isReverseStrand:[7,1,1,""],mapQV:[7,1,1,""],movieInfo:[7,1,1,""],movieName:[7,1,1,""],numPasses:[7,1,1,""],pulseFeature:[7,2,1,""],qId:[7,1,1,""],read:[7,2,1,""],readGroupInfo:[7,1,1,""],readPositions:[7,2,1,""],readType:[7,1,1,""],reader:[7,1,1,""],reference:[7,2,1,""],referenceId:[7,1,1,""],referenceInfo:[7,1,1,""],referenceName:[7,1,1,""],referencePositions:[7,2,1,""],rowNumber:[7,1,1,""],sequencingChemistry:[7,1,1,""],similarity:[7,1,1,""],transcript:[7,2,1,""],zScore:[7,1,1,""]},"pbcore.io.align.CmpH5IO.CmpH5Reader":{ReadGroupID:[7,1,1,""],alignmentIndex:[7,1,1,""],barcode:[7,1,1,""],barcodeName:[7,1,1,""],barcodes:[7,1,1,""],close:[7,2,1,""],hasPulseFeature:[7,2,1,""],holeNumber:[7,1,1,""],index:[7,1,1,""],isBarcoded:[7,1,1,""],isEmpty:[7,1,1,""],isSorted:[7,1,1,""],mapQV:[7,1,1,""],movieInfo:[7,2,1,""],movieInfoTable:[7,1,1,""],movieNames:[7,1,1,""],pulseFeaturesAvailable:[7,2,1,""],qId:[7,1,1,""],readGroupInfo:[7,2,1,""],readGroupTable:[7,1,1,""],readType:[7,1,1,""],readsInRange:[7,2,1,""],referenceInfo:[7,2,1,""],referenceInfoTable:[7,1,1,""],sequencingChemistry:[7,1,1,""],softwareVersion:[7,2,1,""],version:[7,1,1,""],versionAtLeast:[7,2,1,""]},"pbcore.io.align.PacBioBamIndex":{PacBioBamIndex:[7,4,1,""]},"pbcore.io.align.PacBioBamIndex.PacBioBamIndex":{columnNames:[7,1,1,""],rangeQuery:[7,2,1,""],version:[7,1,1,""]},"pbcore.io.dataset":{DataSetIO:[8,0,0,"-"],DataSetMembers:[8,0,0,"-"]},"pbcore.io.dataset.DataSetIO":{AlignmentSet:[8,4,1,""],BarcodeSet:[8,4,1,""],ConsensusReadSet:[8,4,1,""],ContigSet:[8,4,1,""],DataSet:[8,4,1,""],DataSetMetaTypes:[8,4,1,""],MetaDataSet:[8,4,1,""],ReadSet:[8,4,1,""],ReferenceSet:[8,4,1,""],SubreadSet:[8,4,1,""],filtered:[8,5,1,""],openDataSet:[8,5,1,""]},"pbcore.io.dataset.DataSetIO.AlignmentSet":{records:[8,1,1,""]},"pbcore.io.dataset.DataSetIO.BarcodeSet":{addMetadata:[8,2,1,""]},"pbcore.io.dataset.DataSetIO.ContigSet":{addMetadata:[8,2,1,""]},"pbcore.io.dataset.DataSetIO.DataSet":{"__add__":[8,2,1,""],"__deepcopy__":[8,2,1,""],"__eq__":[8,2,1,""],"__init__":[8,2,1,""],"__metaclass__":[8,1,1,""],"__repr__":[8,2,1,""],addDatasets:[8,2,1,""],addExternalResources:[8,2,1,""],addFilters:[8,2,1,""],addMetadata:[8,2,1,""],close:[8,2,1,""],copy:[8,2,1,""],countRecords:[8,2,1,""],disableFilters:[8,2,1,""],enableFilters:[8,2,1,""],filters:[8,1,1,""],fullRefNames:[8,1,1,""],hasPbi:[8,1,1,""],indexRecords:[8,1,1,""],isCmpH5:[8,1,1,""],loadStats:[8,2,1,""],makePathsAbsolute:[8,2,1,""],makePathsRelative:[8,2,1,""],metadata:[8,1,1,""],name:[8,1,1,""],newUuid:[8,2,1,""],numExternalResources:[8,1,1,""],numRecords:[8,1,1,""],processFilters:[8,2,1,""],reFilter:[8,2,1,""],readGroupTable:[8,1,1,""],readsInRange:[8,2,1,""],readsInReference:[8,2,1,""],readsInSubDatasets:[8,2,1,""],records:[8,1,1,""],refInfo:[8,2,1,""],refLength:[8,2,1,""],refLengths:[8,1,1,""],refNames:[8,1,1,""],refWindows:[8,1,1,""],referenceInfo:[8,2,1,""],referenceInfoTable:[8,1,1,""],resourceReaders:[8,2,1,""],split:[8,2,1,""],subSetNames:[8,1,1,""],toExternalFiles:[8,2,1,""],toFofn:[8,2,1,""],totalLength:[8,1,1,""],uuid:[8,1,1,""],write:[8,2,1,""]},"pbcore.io.dataset.DataSetIO.MetaDataSet":{"__call__":[8,2,1,""]},"pbcore.io.dataset.DataSetIO.ReadSet":{addMetadata:[8,2,1,""]},"pbcore.io.dataset.DataSetIO.ReferenceSet":{addMetadata:[8,2,1,""],contigs:[8,1,1,""],get_contig:[8,2,1,""],refNames:[8,1,1,""],resourceReaders:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers":{Automation:[8,4,1,""],AutomationParameter:[8,4,1,""],AutomationParameters:[8,4,1,""],BarcodeSetMetadata:[8,4,1,""],BinBoundaryMismatchError:[8,3,1,""],BinMismatchError:[8,3,1,""],BinNumberMismatchError:[8,3,1,""],BinWidthMismatchError:[8,3,1,""],BioSampleMetadata:[8,4,1,""],BioSamplePointersMetadata:[8,4,1,""],BioSamplesMetadata:[8,4,1,""],CollectionMetadata:[8,4,1,""],CollectionsMetadata:[8,4,1,""],ContigMetadata:[8,4,1,""],ContigSetMetadata:[8,4,1,""],ContigsMetadata:[8,4,1,""],ContinuousDistribution:[8,4,1,""],CopyFilesMetadata:[8,4,1,""],DataSetMetadata:[8,4,1,""],DiscreteDistribution:[8,4,1,""],ExternalResource:[8,4,1,""],ExternalResources:[8,4,1,""],FileIndex:[8,4,1,""],FileIndices:[8,4,1,""],Filter:[8,4,1,""],Filters:[8,4,1,""],Parameter:[8,4,1,""],Parameters:[8,4,1,""],ParentTool:[8,4,1,""],PrimaryMetadata:[8,4,1,""],Provenance:[8,4,1,""],RecordWrapper:[8,4,1,""],ReferenceSetMetadata:[8,4,1,""],RunDetailsMetadata:[8,4,1,""],StatsMetadata:[8,4,1,""],SubreadSetMetadata:[8,4,1,""],WellSampleMetadata:[8,4,1,""],filter_read:[8,5,1,""]},"pbcore.io.dataset.DataSetMembers.Automation":{automationParameters:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.AutomationParameters":{addParameter:[8,2,1,""],automationParameter:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.BarcodeSetMetadata":{barcodeConstruction:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.BioSampleMetadata":{createdAt:[8,1,1,""],uniqueId:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.BioSamplesMetadata":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.CollectionMetadata":{automation:[8,1,1,""],cellIndex:[8,1,1,""],cellPac:[8,1,1,""],collectionNumber:[8,1,1,""],context:[8,1,1,""],instCtrlVer:[8,1,1,""],instrumentId:[8,1,1,""],instrumentName:[8,1,1,""],primary:[8,1,1,""],runDetails:[8,1,1,""],sigProcVer:[8,1,1,""],wellSample:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.CollectionsMetadata":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.ContigMetadata":{digest:[8,1,1,""],length:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.ContigSetMetadata":{contigs:[8,1,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.ContigsMetadata":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.ContinuousDistribution":{binWidth:[8,1,1,""],bins:[8,1,1,""],description:[8,1,1,""],labels:[8,1,1,""],maxBinValue:[8,1,1,""],maxOutlierValue:[8,1,1,""],merge:[8,2,1,""],minBinValue:[8,1,1,""],minOutlierValue:[8,1,1,""],numBins:[8,1,1,""],sample95thPct:[8,1,1,""],sampleMean:[8,1,1,""],sampleMed:[8,1,1,""],sampleSize:[8,1,1,""],sampleStd:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.DataSetMetadata":{merge:[8,2,1,""],numRecords:[8,1,1,""],provenance:[8,1,1,""],summaryStats:[8,1,1,""],totalLength:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.DiscreteDistribution":{bins:[8,1,1,""],description:[8,1,1,""],labels:[8,1,1,""],merge:[8,2,1,""],numBins:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.ExternalResource":{addIndices:[8,2,1,""],indices:[8,1,1,""],merge:[8,2,1,""],metaType:[8,1,1,""],resourceId:[8,1,1,""],tags:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.ExternalResources":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],addResources:[8,2,1,""],resourceIds:[8,1,1,""],resources:[8,1,1,""],sort:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.FileIndex":{metaType:[8,1,1,""],resourceId:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.FileIndices":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.Filter":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],addRequirement:[8,2,1,""],merge:[8,2,1,""],plist:[8,1,1,""],pop:[8,2,1,""],removeRequirement:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.Filters":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],addRequirement:[8,2,1,""],merge:[8,2,1,""],opMap:[8,2,1,""],registerCallback:[8,2,1,""],removeRequirement:[8,2,1,""],testCompatibility:[8,2,1,""],testParam:[8,2,1,""],tests:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.Parameter":{name:[8,1,1,""],operator:[8,1,1,""],value:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.Parameters":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.PrimaryMetadata":{automationName:[8,1,1,""],collectionPathUri:[8,1,1,""],configFileName:[8,1,1,""],copyFiles:[8,1,1,""],resultsFolder:[8,1,1,""],sequencingCondition:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.Provenance":{createdBy:[8,1,1,""],parentTool:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.RecordWrapper":{"__getitem__":[8,2,1,""],"__iter__":[8,2,1,""],"__repr__":[8,2,1,""],addMetadata:[8,2,1,""],append:[8,2,1,""],description:[8,1,1,""],extend:[8,2,1,""],findChildren:[8,2,1,""],getMemberV:[8,2,1,""],getV:[8,2,1,""],index:[8,2,1,""],merge:[8,2,1,""],metadata:[8,1,1,""],metaname:[8,1,1,""],metavalue:[8,1,1,""],name:[8,1,1,""],pop:[8,2,1,""],pruneChildrenTo:[8,2,1,""],removeChildren:[8,2,1,""],setMemberV:[8,2,1,""],setV:[8,2,1,""],submetadata:[8,1,1,""],subrecords:[8,1,1,""],tags:[8,1,1,""],value:[8,1,1,""],version:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.ReferenceSetMetadata":{contigs:[8,1,1,""],merge:[8,2,1,""],organism:[8,1,1,""],ploidy:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.RunDetailsMetadata":{name:[8,1,1,""],runId:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.StatsMetadata":{adapterDimerFraction:[8,1,1,""],controlReadLenDist:[8,1,1,""],controlReadQualDist:[8,1,1,""],insertReadLenDist:[8,1,1,""],insertReadQualDist:[8,1,1,""],medianInsertDist:[8,1,1,""],medianInsertDists:[8,1,1,""],merge:[8,2,1,""],numSequencingZmws:[8,1,1,""],prodDist:[8,1,1,""],readLenDist:[8,1,1,""],readLenDists:[8,1,1,""],readQualDist:[8,1,1,""],readQualDists:[8,1,1,""],readTypeDist:[8,1,1,""],shortInsertFraction:[8,1,1,""]},"pbcore.io.dataset.DataSetMembers.SubreadSetMetadata":{bioSamples:[8,1,1,""],collections:[8,1,1,""],merge:[8,2,1,""]},"pbcore.io.dataset.DataSetMembers.WellSampleMetadata":{bioSamplePointers:[8,1,1,""],comments:[8,1,1,""],concentration:[8,1,1,""],plateId:[8,1,1,""],sampleReuseEnabled:[8,1,1,""],sizeSelectionEnabled:[8,1,1,""],stageHotstartEnabled:[8,1,1,""],uniqueId:[8,1,1,""],useCount:[8,1,1,""],wellName:[8,1,1,""]},"pbcore.util":{Process:[10,0,0,"-"],ToolRunner:[10,0,0,"-"]},"pbcore.util.Process":{backticks:[10,5,1,""]},"pbcore.util.ToolRunner":{PBMultiToolRunner:[10,4,1,""],PBToolRunner:[10,4,1,""]},"pbcore.util.ToolRunner.PBToolRunner":{getVersion:[10,2,1,""],run:[10,2,1,""],start:[10,2,1,""],validateArgs:[10,2,1,""]},pbcore:{chemistry:[3,0,0,"-"],data:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","class","Python class"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:exception","4":"py:class","5":"py:function","6":"py:classmethod"},terms:{"10x":8,"3381_3881":6,"3381_5495":6,"3390_3400":6,"3924_4398":6,"4445_4873":6,"44_322":[6,7],"4920_5354":6,"5413_5495":6,"__add__":8,"__call__":8,"__deepcopy__":8,"__eq__":8,"__getitem__":8,"__init__":8,"__iter__":8,"__metaclass__":8,"__repr__":8,"_alignmentmixin":7,"_bamreaderbas":7,"_metadata":8,"case":8,"class":[0,6,7,8,10],"default":[6,8],"float":[6,7],"function":[6,7,8,10],"import":[6,7,8],"int":[6,7],"new":[6,7,8],"null":[6,7],"public":8,"return":[3,4,6,7,8,10],"short":[6,7],"true":[6,7,8,10],"try":8,"while":8,a1319ff90e994c8190a4fe6569d0822a:[6,7],aacctg:[6,7],aacgggaggcgc:[6,7],aactggt:[6,7],aactggtcacggtcgtggcactggtgaag:[6,7],aatgaaacgatacggcgggtacaatgggaacgtcagccaccattac:[6,7],aatgcaat:[6,7],abil:8,abl:8,about:[6,7,8],abov:4,absolut:8,abus:8,access:[6,7,8],accessor:[6,8],accord:[6,7,8],accuraci:[6,7],acggcg:[6,7],across:6,act:8,actual:8,adapt:6,adapterdimerfract:8,adapterregion:6,adapterregionsnoqc:6,adaptersnoqc:6,add:8,adddataset:8,addexternalresourc:8,addfilt:8,addindic:8,addit:8,addition:6,addmetadata:8,addparamet:8,addrequir:8,addresourc:8,address:8,adher:6,adopt:6,aend:[6,7],after:[6,8],agag:[6,7],against:[6,7],agccccgtcgagaacatacaggtggccaatttcacagcctcttgcctgggcgatcccgaacatcgcaccgga:6,agnost:6,algorithm:8,alia:[6,8],alig:[6,7],align:[1,2,4],aligned_length:[6,7],aligned_read:6,alignmentarrai:[6,7],alignmentindex:[6,7],alignmentreadermixin:7,alignmentrecordmixin:7,alignmentset:8,alignmentsetrefwindow:8,all:[6,7,8],allow:[6,7,8],allsequencingzmw:6,almost:6,aln:[6,7,8],alngroupid:[6,7],alnid:[6,7],along:6,alreadi:8,also:[6,7,8],amongst:8,analysi:[6,7],analysis_result:8,ani:[6,8],anotherattrnam:8,anotherattrvalu:8,appar:8,appear:6,append:8,appli:8,applic:[0,6,7],approach:8,appropri:[6,7,8],approxim:8,aren:8,arg:[6,7,8,10],argument:[6,7,8],around:8,arrai:[6,7],artifact:8,ascii:6,assert:8,assign:8,associ:6,assum:[6,7,8],assumpt:6,astart:[6,7],astyp:8,ataacctgttcgatgctgccat:[6,7],atg:[6,7],atgaaacgatac:[6,7],atgac:[6,7],atgggaacgtcagccaccattac:[6,7],atrownumb:[6,7],attempt:8,attrib:8,attribut:[6,8],attributevalu:8,auto:8,autodetect:8,autom:8,automat:[6,8],automationnam:8,automationparamet:8,auxiliari:6,avail:[6,7,8],back:[6,8],backtick:10,bad:6,bai:[6,7,8],bam1:8,bam2:8,bam:[1,2,4],bamalign:6,bamaln:[6,7],bamread:[6,7],bar:6,barcod:[6,7,8],barcodeconstruct:8,barcodenam:[6,7],barcodeset:8,barcodesetmetadata:8,base:[0,3,6,7,8,10],basecal:[1,2],bash5:4,bash5io:6,bash5read:6,basi:8,basic:[6,7],bax:[1,2,4],baxh5:6,baxh5read:6,baz:6,becaus:8,becom:8,behavior:[6,7,8],belong:8,best:6,bet:6,better:8,betteranalysis_result:8,between:[6,8],beyond:6,bin:8,binboundarymismatcherror:8,bindingkit:3,binmismatcherror:8,binnumbermismatcherror:8,binwidth:8,binwidthmismatcherror:8,bioinformat:[0,6],biosampl:8,biosamplemetadata:8,biosamplepoint:8,biosamplepointersmetadata:8,biosamplesmetadata:8,blasr:[6,7],block:6,bool:8,both:[6,8],bound:6,build:0,built:6,bulk:8,bundl:0,cac:[6,7],cach:[6,7,8],cag:[6,7],cagaaatgcaataaacgggaggcgcttgctggctgattttcgaataacctgttcgatgctgccatttgacccgcggccgg:[6,7],calcul:[6,7],call:8,came:6,can:[6,7,8],cannot:[6,8],capabl:6,carefulli:8,cast:8,cat:6,cattaca:6,ccacggccacgcggggaatgaaacctggtgg:[6,7],cccgc:[6,7],ccsread:[6,8],ccszmwread:6,cellindex:8,cellpac:8,central:[6,7],certainli:6,cgcggcctggc:[6,7],cggt:[6,7],chain:8,challen:8,chang:8,channel:6,charact:6,check:8,chemisti:3,chemistri:[1,2],chemistrybarcodetripl:6,chemistrylookuperror:3,child:8,children:8,chip:6,chr1:6,chunk1consensu:8,chunk1contig:8,chunk2consensu:8,chunk2contig:8,chunk:8,chunkwis:8,cigar:[6,7],circular:6,classmethod:[6,7],clean:8,cleaner:8,clip:[6,7],clippedto:[6,7],close:[6,7,8],cmd:10,cmp:[1,2,4],cmph5:[4,6,7],cmph5align:[6,7],cmph5reader:[6,7],code:[6,8,10],collat:[6,7],collect:8,collectionmetadata:8,collectionmetadatatag:8,collectionnumb:8,collectionpathuri:8,collectionsmetadata:8,column:[6,7],columnnam:7,combin:8,command:[8,10],comment:[6,8],common:[0,8],companion:[6,7],compar:[6,7,8],comparison:8,compat:[1,2],compel:8,complement:[6,7],complex:8,compon:8,compos:8,compulsori:6,comput:[6,7],concentr:8,concern:8,concord:[6,7],concret:8,configfilenam:8,configur:3,conflict:8,conform:8,conjunct:8,consectetur:8,consensu:6,consensusreadset:8,consid:[6,8],consist:8,consolid:8,constructor:[6,8],consult:6,consum:8,contain:[4,6,7,8],content:1,context:[6,8],contig:[6,7,8],contig_id:8,contigmetadata:8,contigset:8,contigsetmetadata:8,contigsmetadata:8,continuousdistribut:8,contrast:6,controlreadlendist:8,controlreadqualdist:8,conveni:[6,7],convent:[6,7],convolut:8,coordin:[6,7,8],copi:[6,8],copyfil:8,copyfilesmetadata:8,core:8,correct:8,correspond:[4,6,7],could:8,count:8,countrecord:8,cours:8,craft:8,creat:8,createdat:8,createdbi:8,ctctgccggtgtggcagccgaa:[6,7],curat:8,current:8,curstart:8,custom:6,data:[0,1,2],dataset:0,datasetio:8,datasetmemb:8,datasetmetadata:8,datasetmetatyp:8,datasetwrit:8,datastructur:8,date:8,deal:8,debug:[0,8],decod:[6,7],decodetripl:3,deep:8,deepcopi:8,deeper:8,defaultvalu:6,defin:8,definit:8,del:6,deletionqv:[6,7],deletiontag:[6,7],delimit:6,demand:[6,7],depend:8,deprec:[6,7],depth:8,describ:6,descript:[8,10],design:8,desir:[6,8],despit:8,detail:8,determin:[6,7],develop:8,dict:[6,7,8],dictionari:[4,8],differ:8,digest:8,direct:[6,7],directli:[6,7,8],directori:8,disabl:8,disablefilt:8,discretedistribut:8,disk:8,displai:[6,7],distribut:8,divid:8,dna:6,doctest:[5,8],doe:6,doesn:[6,8],dog:6,dolduuid:8,don:[6,8],done:6,dot:[6,7],doubli:6,down:8,ds1:8,ds1d:8,ds1tl:8,ds2:8,ds2d:8,ds2tl:8,ds3:8,ds4:8,ds5:8,dset:8,dss:8,dstype:8,dtype:[6,7],dummi:8,duplic:8,dure:8,each:[6,8],earli:8,easi:8,easier:8,easili:6,effici:[6,7,8],egfr_exon_2:6,egfr_exon_3:6,egfr_exon_4:6,egfr_exon_5:6,either:[6,7,8],element:8,elementattributenam:8,elementtag:8,elementtext:8,ellipsi:8,eman:8,emiss:8,emit:8,emptycmph5error:7,enabl:[6,7,8],enablefilt:8,encod:[6,7],end:[4,6,8],endrow:[6,7],endswith:8,enforc:8,enough:8,ensur:8,entir:[6,7],entri:6,equal:[6,8],er1:8,er2:8,er3:8,error:10,especi:8,essenti:0,estim:6,etc:8,even:8,eventu:6,everi:[6,8],exampl:[4,6,7],except:[3,6,7,8],excis:[6,7],exclus:6,execut:[6,8],exist:[6,8],exit:[6,8],expand:8,expect:[6,8],expens:8,explicitli:8,expos:[6,7],extend:8,extens:7,extent:6,extern:8,externalrefer:8,externalresourc:8,extr:8,extract:[6,7],extresourc:8,factor:[6,7],factori:[6,8],faecali:8,fai:6,fail:8,failur:8,fals:[6,7,8],fasta:[1,2,4],fastaread:[6,8],fastarecord:6,fastat:6,fastawrit:6,faster:8,fastq:[1,2],fastqread:6,fastqrecord:6,fastqwrit:6,featur:[6,7],featurenam:[6,7],fetch:[6,7],few:[6,8],field:[6,7,8],fieldnam:6,file:[0,1,2,3,4],fileindex:8,fileindic:8,filenam:[4,6,7,8],filename_list:8,filenameorh5fil:[6,7],filt:8,filter:[6,8],filter_read:8,filtrat:8,findchildren:8,first:[6,7,8],flatten:8,flexibl:6,fname:[6,7,8],focu:6,focus:8,fofn:[4,8],follow:[6,7,8],foo:6,form:6,format:[0,1,2],forward:[6,7],found:[3,8],four:6,framer:[6,7],from:[3,6,7,8],fromstr:[6,7],fulfil:8,full:[6,7,8],fullnam:[6,7],fullrefnam:8,func:8,futur:8,gaagccttgcatactga:[6,7],gap:[6,7],gather:8,gattaca:6,gcact:[6,7],gcatactgatgcactt:[6,7],gcatttgtgctgccggga:[6,7],gcatttgtgctgccgggaaacggcgttttcgt:[6,7],gcc:[6,7],gccacgcg:[6,7],gcgggtac:[6,7],gener:[4,6,8],genom:[6,7,8],get:[4,6,7,8],get_contig:8,getbam:[5,8],getbamandcmph5:4,getbash5:4,getbash5_v20:4,getbash5_v21:4,getbash5_v23:4,getbaxforbam:4,getbaxh5_v20:4,getbaxh5_v21:4,getbaxh5_v23:4,getbcfofn:4,getbch5:4,getblasrm4:4,getblasrm5:4,getccsbam:4,getccsh5:4,getcmph5:[4,6,7],getcmph5andba:4,getdosformattedfasta:4,getfasta:4,getfofn:[4,5,8],getgff3:4,gethdfsubreadset:5,getlambdafasta:4,getmemberv:8,getref:5,getstat:[5,8],getsubreadset:[5,8],gettinyfasta:[4,6],getunalignedbam:4,getv:8,getvers:10,getxml:[5,8],getxmlwithstat:5,gff3record:6,gff:[1,2],gffreader:6,gffv3:4,gffwriter:6,give:8,given:[3,6,7,8],grant:8,great:8,group:[6,7],guarante:[6,8],gusfield:[6,7],had:6,hand:6,handi:0,handl:[6,8,10],happen:6,hard:8,hasconsensusbasecal:6,hash:8,haspbi:8,haspulsefeatur:[6,7],hasrawbasecal:6,have:[6,8],hdf5:6,hdfsubreadset:8,header:[6,7,8],held:8,help:8,helper:8,here:8,hex:[6,7],hierarchi:8,hit:6,hole:6,holenumb:[6,7,8],how:[6,7],howev:8,hqregion:6,hqregionsnr:6,hygien:8,idea:6,ident:[6,7,8],idiom:6,idontexist:8,ignor:[6,8],ignoresubdataset:8,illicit:8,implement:8,impos:8,in_fn:8,inbam:8,includ:[6,7,8],inclus:[6,8],incompat:8,index:[0,6,7,8],indexedalignmentreadermixin:7,indexedbamread:[6,7,8],indexedfastaread:6,indexrecord:8,induc:[6,7],infer:[6,8],infil:8,info:8,inform:[6,7],initi:8,input:8,insert:[6,7],insertionqv:[6,7],insertreadlendist:8,insertreadqualdist:8,insertregion:6,insertregionsnoqc:6,insid:8,instanc:8,instanti:[6,8],instctrlver:8,instead:8,instrument:[3,6],instrumentid:8,instrumentnam:8,integ:[6,7,8],intellig:8,intend:8,interact:10,intercept:8,interfac:[6,8],intern:[6,7,8],interpret:6,intersect:[6,7],interv:6,intuit:8,involv:[6,7],ipd:[6,7],isbarcod:[6,7],iscc:[6,7],iscmph5:8,isempti:[6,7],isforwardstrand:[6,7],ismap:[6,7],isreversestrand:[6,7],issort:[6,7],isunmap:[6,7],item:8,iter:[6,7,8],itertool:8,join:8,just:[6,8],justifi:8,justindic:[6,7,8],keep:8,kei:[4,6,7,8],key_result:8,kind:6,know:6,kwarg:[6,7,8],label:8,labeledsubset:8,lambda:[4,8],lambda_neb3011:[6,7],larg:8,last:[6,7,8],later:8,latter:4,lean:8,least:8,legaci:[1,2],len:[6,8],length:[6,7,8],less:8,let:8,level:8,lightweight:[6,7,8],like:8,limit:8,line:[4,6],linear:[6,7],list:[4,6,7,8],listzmwmetr:6,littl:8,load:[6,7,8],loadstat:8,local:8,locat:8,log:8,logic:8,longreadsrock:8,look:8,lookup:8,lot:8,m110818_075520_42141_c100129202555500000315043109121112_s1_p0:6,m110818_075520_42141_c100129202555500000315043109121112_s2_p0:[6,7],m4reader:7,m4record:7,m5reader:7,m5record:7,machin:[6,7,8],mai:[6,8],main:8,maintain:8,major:8,make:[6,8],makepathsabsolut:8,makepathsrel:8,manag:6,mani:8,manipul:8,manual:8,map:[4,6,7,8],mapqv:[6,7],match:[4,6,7],maxbinvalu:8,maxoutliervalu:8,md5:[6,7,8],mean:[6,7,8],medianinsertdist:8,member:8,memo:8,merg:8,merge_stderr:10,mergeqv:[6,7],messag:[8,10],metaclass:8,metadata:[3,8],metadataset:8,metadataxmlpath:3,metanam:8,metatyp:8,metavalu:8,method:[6,7,8,10],metric:6,might:8,min1:8,min2:8,min:8,minbinvalu:8,mind:8,minimalvers:[6,7],minoutliervalu:8,mirror:8,mkdtemp:8,mode:6,model:[0,1,2,6,7],modest:7,modifi:8,modul:[0,1],moleculeid:[6,7],more:8,most:[6,7,8],move:[6,7],movi:[6,7,8],movie1:8,movie2:8,movieid:[6,7],movieinfo:[6,7],movieinfot:[6,7],movienam:[6,7,8],much:8,multipl:8,multipli:[6,7],multistream:6,must:6,mutabl:8,name:[3,6,7,8],nan:[6,7],nativ:[6,7,8],nbackread:[6,7],ndel:[6,7],necessari:8,necessarili:[6,7],need:[6,8],nest:8,never:8,newextresourc:8,newfilt:8,newlin:6,newmemb:8,newmetadata:8,newuuid:8,nin:[6,7],nmm:[6,7],node:8,none:[6,7,8],noqc:6,normal:6,notat:[6,7],note:[6,7,8],notic:6,novalid:8,novel:8,novo:8,now:8,nreadoverlap:[6,7],num1:8,num2:8,number:[6,7,8],numbin:8,numexternalresourc:8,numpass:[6,7],numpi:[6,7],numrecord:8,numsequencingzmw:8,object:[6,7,8,10],objmetadata:8,obtain:[6,7],offset_begin:[6,7],offset_end:[6,7],offsetbegin:6,offsetend:6,often:8,old:8,older:6,omit:[6,7],onli:[6,7,8],open:[6,8],openalignmentfil:6,opendataset:8,openindexedalignmentfil:6,oper:[6,7,8],opmap:8,opt:8,option:[6,7,8],order:[6,7],orderedattrdict:8,organ:8,orient:[6,7],origin:[6,8],other:[6,8],otherdataset:8,otherwis:[6,7,8],our:8,out:8,out_fn:8,outdir:8,outfil:8,outfilename_list:8,outfn:8,outfofn:8,output:[6,7,8,10],outputfilenam:8,outsid:6,outxml:8,over:[6,7,8],overlap:[6,7,8],own:8,p_modul:8,pacbio:[0,1,2],pacbiosecondarydatamodel:8,pack:[6,7],packag:[0,1],page:0,pair:8,parallel:8,param:8,paramet:8,parenttool:8,pars:[6,8],parser:8,part:[6,8],pass:[6,8],path:8,pbalign:8,pbi:[6,7,8],pbifilenam:7,pbinam:8,pbmultitoolrunn:10,pbtoolrunn:10,pctsimilar:[6,7],per:8,perform:[6,7,8],perhap:8,perl:10,phage:4,phase:6,pile:8,pipestat:8,place:6,plan:8,plateid:8,plist:8,ploidi:8,pointer:6,polymeras:6,pop:8,popul:8,portion:[6,7],posit:[6,7,8],possibl:8,postfilt:8,potenti:8,pre:[6,7],prebasefram:6,precomput:[6,7],predict:6,prefer:[6,8],prefix:[6,7],present:[6,7,8],preserv:8,preservehead:6,pretti:[6,7,8],prevent:8,previou:8,previous:8,primari:8,primarymetadata:8,print:[6,7,8],probabl:8,problem:8,procedur:8,process:[0,1,2,6,7,8],processfilt:8,proddist:8,produc:[4,6,7,8],product:6,prog:8,program:[6,7,8],programnam:[6,7],properli:8,properti:[6,8],proven:8,provid:[0,6,7,8],prunechildrento:8,prupos:8,puls:[6,7],pulsefeatur:[6,7],pulsefeaturesavail:[6,7],pulsewidth:[6,7],puru:8,pysamalignedread:[6,7],python:[0,6,7,8],qend:[6,7],qid:[6,7],qlen:[6,7],qname:[6,7],qstart:[6,7],qual:[6,7],qualiti:6,qualitystr:6,qualityvalu:[6,7],queri:[6,7,8],queryend:[6,7],querynam:[6,7],querystart:[6,7],quick:[1,2],quiver:8,qvname:6,rais:[6,7],random:[6,7],rang:[6,7,8],rangequeri:7,rather:8,raw:[6,7,8],rcrefstrand:[6,7],reaction:6,read:[0,6,7,8],read_length:[6,7],readend:6,reader:[6,7,8],readerbas:7,readgroupid:[6,7],readgroupinfo:[6,7],readgroupt:[6,7,8],readlendist:8,readlength:[6,7],readnam:6,readnoqc:6,readposit:[6,7],readqualdist:8,readscor:6,readset:8,readsinrang:[6,7,8],readsinrefer:8,readsinsubdataset:8,readstart:6,readtyp:[6,7,8],readtypedist:8,realli:8,reason:8,recarrai:[6,7,8],recent:8,recommend:6,recommmend:6,record:[3,6,7,8],recordwrapp:8,recov:8,recurs:8,reduc:8,ref000001:[6,7],ref000002:6,ref000003:6,ref000004:6,ref:[6,7],refend:[6,7],refer:[4,6,7,8],referencefastafnam:[6,7],referencefilenam:8,referenceid:[6,7],referenceinfo:[6,7,8],referenceinfot:[6,7,8],referencenam:[6,7],referenceposit:[6,7],referenceset:8,referencesetmetadata:8,referer:6,refgroupid:[6,7],refid:[6,7],refilt:8,refinfo:8,refinfoid:[6,7],refkei:[6,7],reflect:[6,7],reflength:8,refnam:8,refrenc:8,refstart:[6,7],refwindow:8,regener:8,region:6,regiont:6,registercallback:8,regularli:8,rel:8,relationship:8,relev:3,reli:8,relpath:8,remap:8,remov:[6,7,8],removechildren:8,removerequir:8,renabl:8,rend:[6,7],replac:8,replic:[6,7],repres:[6,7,8],represen:8,represent:[6,7,8],req:8,requir:[6,7,8],resembl:8,resouc:8,resourc:[5,8],resourceid:8,resourcemismatcherror:8,resourceread:8,restrict:6,result:8,resultsfold:8,retriev:[6,7],revers:[6,7,8],reversecompl:6,rgid:[6,7],rid:8,risk:8,rname:8,root:8,roughli:8,row:[6,7,8],rownumb:[6,7],rstart:[6,7],run:[6,7,8,10],rundetail:8,rundetailsmetadata:8,runid:8,safe:6,sai:8,said:8,same:[4,6,7,8],sampl:8,sample95thpct:8,samplem:8,samplemean:8,samplereuseen:8,samples:8,samplestd:8,samtool:[6,7],sanger:6,scenario:8,score:[6,7],scrape:3,script:8,search:0,second:[6,7],secondari:6,see:[6,7,8],seem:8,segment:[6,7],select:8,self:8,semant:[6,7],send:8,separ:8,seqfil:8,seqid:6,sequenc:[6,7,10],sequencingchemistri:[6,7],sequencingcondit:8,sequencingkit:3,sequencingzmw:6,serial:8,serv:8,set:8,setabl:8,setmemberv:8,setnumb:[6,7],setter:8,setv:8,shallow:6,sharedindex:[6,7],shorthand:[6,7],shortinsertfract:8,shot:6,should:[6,7,8],shouldn:8,show:8,sibl:8,sigprocv:8,similar:[6,7,8],similarli:8,simpl:[6,8],simul:10,simultan:8,sinc:[6,7],singl:[6,7,8],sizeselectionen:8,slice:[6,7],small:0,smrtbell:6,snr:6,softwarevers:[3,6,7],some:[6,7,8],someth:8,somewhat:8,sort:8,sourc:[6,7],space:[6,7],span:[6,7],special:8,specif:[6,7,8],specifi:[6,7,8],split:[6,8],stack:8,stagehotstarten:8,standard:[6,7],start:[1,2],startrow:[6,7],state:8,statement:6,statist:8,statsfil:8,statsmetadata:8,still:[6,8],stl:6,store:[6,7,8],str:8,strand:[6,7],stream:6,string:[6,7,8,10],strip:8,strobenumb:[6,7],structur:[6,7,8],style:[6,7],sub:[6,8],subalign:[6,7],subclass:8,subcontig:8,subdataset:8,subinterv:6,subject:8,submetadata:8,submodul:[1,2],subpackag:1,subread:[6,7,8],subreadset:8,subreadsetmetadata:8,subreadsnoqc:6,subrecord:8,subset:[6,8],subsetnam:8,substitutionqv:[6,7],substitutiontag:6,subtyp:8,succe:8,success:8,suffix:[6,8],sum:[6,7],summar:[6,7,8],summari:7,summarystat:8,superclass:8,superflu:8,suppli:[6,8],support:[6,7,10],system:6,tag:8,take:[6,7],tbd:8,tcctctgccggtgtggcagccgaaaatgacaagagccgcggcctggc:[6,7],tempfil:8,tend:[6,7],term:[6,7],test1:8,test2:8,test3:8,test:[0,8],testcompat:8,testparam:8,testtyp:8,text:[6,7,8],tggcactgg:[6,7],tggctgat:[6,7],than:8,thei:[6,7,8],them:8,theori:8,therefor:8,thi:[6,7,8],thing:8,those:8,though:8,thought:[6,8],three:6,threshold:8,through:8,thu:6,tid:[6,7],tidmap:8,time:[6,7],timescal:[6,7],todo:8,toexternalfil:8,tofofn:8,togeth:8,toolrunn:[1,2],top:[6,8],total:8,totallength:8,touch:8,toxml:8,traceback:8,trail:6,transcript:[6,7],transform:8,transit:6,tree:8,tri:7,tricki:8,tripl:3,triplefrommetadataxml:3,truncat:[6,7],tstart:[6,7,8],ttcg:[6,7],tttcgtgt:[6,7],tupl:8,turn:8,two:[6,7,8],type:[6,7,8],typeerror:8,uint32:[6,7],unalign:[4,6,7],uncompl:[6,7],undefin:[6,7],underli:6,uniform:6,union:8,uniqu:8,uniqueid:8,unless:[6,8],unmerg:8,unrolledcigar:[6,7],unsampl:8,unsort:[6,7],untyp:8,unwrap:6,updat:8,upon:8,uri:8,usabl:6,usag:[6,7],useabl:6,usecount:8,user:[6,7,8],usual:8,util:[0,1,2],uuid:8,valid:[8,10],validatearg:10,valu:[4,6,7,8],valueerror:[6,8],vari:8,variantcal:8,variou:8,vector:[6,7],version:[1,2],versionatleast:[6,7],via:[6,7,8],wai:[6,7,8],want:[6,7,8],waveguid:6,well:[6,8],wellnam:8,wellsampl:8,wellsamplemetadata:8,were:[4,6,7],what:[6,7,8],when:[6,7,8],where:[6,8],whether:[6,7,8],which:[6,7,8],whitelist:8,whitespac:[6,7],whose:[6,7],width1:8,width2:8,widthinfram:6,wikipedia:6,window:[6,7,8],winend:[6,7],winid:[6,7],winstart:[6,7],within:[6,7,8],without:[6,7,8],wont:8,work:8,worth:8,would:[6,8],wrap:[6,8],wrapper:8,write:[0,6,8],writer:6,writerecord:6,written:8,xml:[0,3,8],xmlelement:8,xmlelementdict:8,xmlelementdictwithsameordifferenttag:8,xmltag:8,xmltagwithsameordifferenttag:8,xsd:8,yet:8,yield:8,you:[6,8],your:[6,8],zero:6,zip:8,zmw8:6,zmw:6,zmwmetric:6,zmwname:6,zmwread:6,zscore:[6,7]},titles:["pbcore","pbcore","pbcore package","pbcore.chemistry package","pbcore.data","pbcore.data.datasets package","pbcore.io","pbcore.io.align package","pbcore.io.dataset","pbcore.model","pbcore.util"],titleterms:{align:[6,7],api:[0,8],bam:6,bamalign:7,bamio:7,basecal:6,bax:6,blasrio:7,chemistri:3,cli:8,cmp:6,cmph5io:7,compat:6,consol:8,content:[2,3,5,7],data:[4,5],dataset:[5,8],document:0,entri:8,exampl:8,fasta:6,fastq:6,file:6,format:6,gff:6,indic:0,inform:8,legaci:6,librari:0,model:9,modul:[2,3,5,7,10],overview:8,pacbio:6,pacbiobamindex:7,packag:[2,3,5,7],pbcore:[0,1,2,3,4,5,6,7,8,9,10],pipelin:8,point:8,process:10,quick:6,resequenc:8,start:6,submodul:[3,7],subpackag:2,tabl:0,tangenti:8,toolrunn:10,usag:8,util:10,version:[6,8]}})